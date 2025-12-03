import { defineConfig } from 'tsup';

export default defineConfig({
    entry               : ['src/main.ts'],
    format              : ['cjs', 'esm'],
    dts                 : true,
    splitting           : false,
    sourcemap           : true,
    clean               : true,
    minify              : true,
    treeshake           : true,
    external            : [
        // Bun runtime
        'bun',

        // Dependencies
        '@je-es/cli',
    ],
    target              : 'es2022',
    outDir              : 'dist',
    banner              : {
        js              : '#!/usr/bin/env bun'
    },
});