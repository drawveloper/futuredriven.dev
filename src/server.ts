import {
  Application,
  bold,
  createServerTimingMiddleware,
  cyan,
  green,
  HttpError,
  join,
  red,
  Router,
  Status,
} from "./deps.ts";
import { render } from "./components/app.tsx";
import { AppState } from "./components/state.ts";
import { getPostById, getPosts } from "./posts.ts";

const PORT = parseInt(Deno.env.get("PORT") || "8080");
const __dirname = new URL(".", import.meta.url).pathname;
const publicFolderPath = join(__dirname, "..", "public");
const builderApiKey = Deno.env.get("BUILDER_API_KEY") || "";
const { start, end, serverTimingMiddleware } = createServerTimingMiddleware();

const app = new Application();

const getState = (hostname: string, pathname: string) => ({
  builder: pathname.includes("/builder"),
  blog: hostname.includes("futuredriven.blog"),
  capital: hostname.includes("futuredriven.capital"),
  dev: hostname.includes("futuredriven.dev"),
});

app.use(serverTimingMiddleware);

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
    `${green(context.response.status.toString())} ${
      green(context.request.method)
    } ${cyan(context.request.url.pathname)} - ${
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
router.get("/_r", async (context) => {
  await context.upgrade();
});

// Mount builder.io web component for visual editing
router.get("/builder", (context) => {
  context.response.headers.set(
    "Cache-Control",
    "public, max-age=30, stale-while-revalidate=600",
  );
  context.response.body =
    `<html><body><builder-component model="page" api-key="${builderApiKey}"></builder-component>
    <script async src="https://cdn.builder.io/js/webcomponents"></script></body></html>`;
});

router.get("/", async (context) => {
  const { hostname, pathname } = context.request.url;
  if (hostname.includes("gadr.rio")) {
    return context.response.redirect("https://futuredriven.dev");
  }

  const state: AppState = getState(hostname, pathname);

  if (state.blog) {
    start("fetch");
    const posts = await getPosts();
    end("fetch");

    state.posts = posts;
  }

  // Get content from builder IO
  if (state.capital) {
    const qwikUrl = new URL("https://cdn.builder.io/api/v1/qwik/page");
    qwikUrl.searchParams.set("apiKey", builderApiKey);
    qwikUrl.searchParams.set("userAttributes.urlPath", "/capital");

    const qwikResponse = await fetch(String(qwikUrl));
    const { html } = await qwikResponse.json();
    state.html = html;
  }

  start("render");
  const result = render(state);
  end("render");

  context.response.headers.set(
    "Cache-Control",
    "public, max-age=30, stale-while-revalidate=600",
  );
  context.response.body = result;
});

router.get("/p/:id", async (context) => {
  const { hostname, pathname } = context.request.url;
  const state: AppState = getState(hostname, pathname);

  if (state.blog) {
    const cleanId = context.params?.id.split("-").pop() as string;
    start("fetch");
    const { title, content, published } = await getPostById(cleanId);
    end("fetch");

    state.post = {
      title,
      content,
      published,
    };
  }

  context.response.headers.set(
    "Cache-Control",
    "public, max-age=30, stale-while-revalidate=600",
  );
  start("render");
  context.response.body = render(state);
  end("render");
});

app.use(router.routes());
app.use(router.allowedMethods());

// Static content under /public
app.use(async (context) => {
  console.log(`>>> static try /public${context.request.url.pathname}`);
  await context.send({ root: publicFolderPath });
});

// Log hello
app.addEventListener("listen", () => {
  console.log(`Listening on ${cyan(`http://localhost:${PORT}`)}`);
});

// Start server
await app.listen({ port: PORT });
