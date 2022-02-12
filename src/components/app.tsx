/** @jsxImportSource nano */
import { Helmet, renderSSR } from "../deps.ts";

import { Posts } from "./posts.tsx"
import { Post } from "./post.tsx"
import { PostState, PostsState } from "../posts.ts";

export function render(state: { post: any, posts: any }) {
  const ssr = renderSSR(<App post={state.post} posts={state.posts} />);
  const { body, head, footer } = Helmet.SSR(ssr);

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Future Driven</title>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/windi.css">
        ${head.join("\n")}
        ${Deno.env.get('ENABLE_LIVE_RELOAD')? <script src="/livereload.js"></script> : ''}
      </head>
      <body class="text-indigo-400 m-6 bg-cover bg-fixed bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};

export const App = (props: { post: PostState, posts: PostsState }) => {
  const renderPage = () => {
    if (props.posts) {
      return <Posts posts={props.posts} />
    }
    else if (props.post) {
      return <Post post={props.post} />
    }
    else return <span>404 - not found :(</span>
  }

  return (
    <div class="h-full">
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a
            class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            Future<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Driven
            </span>
          </a>
        </div>
      </div>
      <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
        <div class="flex flex-col w-3/5 justify-center lg:items-start overflow-y-hidden">
          {renderPage()}
        </div>
        <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between">
          <div class="w-full pt-16 pb-6 text-xs text-center md:text-center fade-in fixed bottom-0">
            <p style={{ "text-align": "center" }}>
              <a class="text-gray-500 no-underline hover:no-underline" href="#">
                &copy; Future Driven 2022
              </a>{" "}
              — Made in Rio with 🤍
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
