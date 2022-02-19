/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { 
  Helmet, 
  renderSSR, 
  html,
  setup,
  virtualSheet, 
  getStyleTag,
  tw,
} from "../deps.ts";
import { isLiveReloadEnabled } from "../config.ts";
import { Layout } from "./layout.tsx"
import { PostState, PostsState } from "../posts.ts";

const lr = isLiveReloadEnabled()
const sheet = virtualSheet()
setup({sheet, preflight: false})

export function render(state: { post?: PostState, posts?: PostsState }) {
  sheet.reset()
  const bodyClass = tw`font-sans text-indigo-900 m-10 lg:m-6 bg-gradient-to-r from-white to-indigo-100`
  const ssr = renderSSR(<Layout post={state.post!} posts={state.posts!} />);
  const { body, head, footer } = Helmet.SSR(ssr);
  const styleTag = getStyleTag(sheet)

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Future Driven</title>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Future Driven Blog — communication, culture and code — by Guilherme Rodrigues"/>
        ${styleTag}
        ${head.join("\n")}
        ${lr ? <script src="/livereload.js"></script> : ''}
      </head>
      <body class="${bodyClass}">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
}

