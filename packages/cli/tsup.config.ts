import type { Options } from 'tsup';

export const tsup: Options = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  shims: false,
  sourcemap: false,
};
