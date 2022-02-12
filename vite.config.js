import { defineConfig } from 'vite';
import { qwikRollup } from '@builder.io/qwik/optimizer';
import { writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import fetch from 'node-fetch';
import FullReload from 'vite-plugin-full-reload'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

const isProdBuild = !!process.argv.find(a => a === 'build')
console.log('Production build', isProdBuild)

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        'format': isProdBuild ? 'esm' : undefined,
        chunkFileNames: 'q-[hash].js',
        assetFileNames: 'q-[hash].[ext]',
      },
    },
  },
  publicDir: !isProdBuild,
  ssr: {
    noExternal: true,
  },
  plugins: [
    FullReload(['server/*.ts'], { delay: 2000 }),
    qwikRollup({
      srcDir: resolve('./src'),
      entryStrategy: {
        type: 'single',
      },
      symbolsOutput: (data) => {
        // Skip symbols on SSR build
        if (isProdBuild) {
          return
        }
        outputJSON('./server/q-symbols.json', data);
        console.log('./server/q-symbols.json generated.')
      },
    }),
  ],
});

async function outputJSON(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(data, null, 2));
}
