/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { renderToString, RenderToStringOptions, QwikLoader } from '@builder.io/qwik/server';
import { Root } from './root.tsx';
import { BlogState } from './blog.ts'

/**
 * Entry point for server-side pre-rendering.
 *
 * @returns a promise when all of the rendering is completed.
 */
export function render(opts: RenderToStringOptions, state: BlogState) {
  return renderToString(
    <html>
      <head>
        <title>Future Driven</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <style>{
        `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
html { font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}`
        }</style>
      </head>
      <body q:base="/" class="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" style={{"background-image": "url('/header.png');"}}>
        <Root state={state}/>
        <QwikLoader debug={opts.debug} events={undefined} />
      </body>
    </html>,
    opts
  );
}
