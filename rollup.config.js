/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: false,
        name: 'react-manager-cookie',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: false,
      },
    ],
    external: ['react'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      // nodeResolve({ preferBuiltins: false }),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
