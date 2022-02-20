import {
  Application,
  HttpError,
  Router,
  Status,
  bold,
  cyan,
  green,
  red,
  join,
  createServerTimingMiddleware,
} from "./deps.ts";

import { render } from "./components/app.tsx";
import { AppState } from "./components/state.ts";
import { getPosts, getPostById } from "./posts.ts";

const PORT = parseInt(Deno.env.get("PORT") || "8080");
const __dirname = new URL(".", import.meta.url).pathname;
const publicFolderPath = join(__dirname, "..", "public");
const { start, end, serverTimingMiddleware } = createServerTimingMiddleware()

const app = new Application();

const getStateFromHostname = (hostname: string) => ({
  blog: hostname.includes('futuredriven.blog'),
  capital: hostname.includes('futuredriven.capital'),
  dev: hostname.includes('futuredriven.dev'),
})

app.use(serverTimingMiddleware)

// Error handler middleware
app.use(async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      // deno-lint-ignore no-explicit-any
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>${e.status} - ${e.message}</h1>
              </body>
            </html>`;
      } else {
        context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>${e.status} - ${Status[e.status]}</h1>
              </body>
            </html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!DOCTYPE html>
            <html>
              <body>
                <h1>500 - Internal Server Error</h1>
              </body>
            </html>`;
      console.log("Unhandled Error:", red(bold(e.message)));
      console.log(e.stack);
    }
  }
});

// Logger
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${green(context.response.status.toString())} ${green(context.request.method)} ${cyan(context.request.url.pathname)} - ${
      bold(
        String(rt),
      )
    }`,
  );
});

// Response Time
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Create an oak Router
const router = new Router();

// Handle live reload websocket connection
router.get('/_r', async ctx => {
  await ctx.upgrade();
});

router.get("/", async (context) => {
  const state: AppState = getStateFromHostname(context.request.url.hostname)

  if (state.blog) {
    start('fetch')
    const posts = await getPosts();
    end('fetch')

    state.posts = posts
  }

  start('render')
  const result = render(state);
  end('render')
  
  context.response.body = result;
});

router.get("/p/:id", async (context) => {
  const state: AppState = getStateFromHostname(context.request.url.hostname)
  
  if (state.blog) {
    const cleanId = context.params?.id.split('-').pop() as string 
    start('fetch')
    const {title, content} = await getPostById(cleanId);
    end('fetch')

    state.post = {
      title,
      content,
    }
  }

  start('render')
  context.response.body = render(state);
  end('render')
})

app.use(router.routes());
app.use(router.allowedMethods());

// Static content under /public
app.use(async (context) => {
  console.log(`>>> static try /public${context.request.url.pathname}`)
  await context.send({ root: publicFolderPath });
});

// Log hello
app.addEventListener("listen", () => {
  console.log(`Listening on ${cyan(`http://localhost:${PORT}`)}`);
});

// Start server
await app.listen({ port: PORT });
