/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import {
  getStyleTag,
  Helmet,
  html,
  renderSSR,
  setup,
  tw,
  virtualSheet,
} from "../deps.ts";
import { isLiveReloadEnabled } from "../config.ts";
import { AppState } from "./state.ts";
import { Layout } from "./layout.tsx";

const lr = isLiveReloadEnabled();
const sheet = virtualSheet();
setup({ sheet, preflight: true });

function getTitle(state: AppState) {
  if (state.capital) {
    return "Future Driven Capital — We invest in a future worth building.";
  } else if (state.works) {
    return "Future Driven Works - Complete conversations, extraordinary results.";
  } else if (state.blog) {
    return "Future Driven Blog — Future-based language transforms reality.";
  } else if (state.dev) {
    return "Future Driven Dev - Guilherme Rodrigues' homepage";
  } else {
    return "Future Driven";
  }
}

function getDescription(state: AppState) {
  if (state.capital) {
    return "We find, foster and fund leaders that deliver extraordinary results.";
  } else if (state.works) {
    return "Leaders create the future. We help people discover their own leadership.";
  } else if (state.blog) {
    return "Communication, culture and code — from the future. A blog by Guilherme Rodrigues.";
  } else if (state.dev) {
    return "Guilherme Rodrigues is a software developer and investor based in Rio de Janeiro, Brasil.";
  } else {
    return "";
  }
}

export function render(state: AppState) {
  sheet.reset();
  const htmlClass = tw`font-sans text-gray-900 bg-white min-h-full`;
  const bodyClass = tw`m-10 md:m-16 min-h-full`;
  const ssr = renderSSR(
    <Layout
      html={state.html}
      post={state.post!}
      posts={state.posts!}
      blog={state.blog}
      capital={state.capital}
      dev={state.dev}
      works={state.works}
    />,
  );
  const { body, head, footer } = Helmet.SSR(ssr);
  const styleTag = getStyleTag(sheet);

  return html`<!DOCTYPE html>
    <html lang="en" class="${htmlClass}">
      <head>
        <title>${getTitle(state)}</title>
        <meta name="theme-color" content="#FFFFFF"/>
        <meta property="og:image" content="/apple-icon-180x180.png" />
        <meta property="og:title" content="${getTitle(state)}" />
        <meta property="og:description" content="${getDescription(state)}" />
        <meta property="og:locale" content="en_US" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#FFFFFF">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${getDescription(state)}"/>
        ${styleTag}
        ${head.join("\n")}
        ${lr ? <script src="/livereload.js"></script> : ""}
      </head>
      <body class="${bodyClass}">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
}
