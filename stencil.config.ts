import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import dotenvPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
  taskQueue: 'async',
  devServer: {
    openBrowser: false,
  },
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://shreesh.dev/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null,
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
  ],
  plugins: [
    sass({
      includePaths: ['ds'],
    }),
    dotenvPlugin(),
  ],
};