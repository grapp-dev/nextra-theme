import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  outDir: './lib',
  format: 'esm',
  clean: true,
  dts: true,
  external: ['react', 'next', 'nextra', 'nextra-theme-docs'],
  outExtension: () => {
    return {
      js: '.js',
    };
  },
  loader: {
    '.css': 'local-css',
    '.png': 'base64',
  },
});
