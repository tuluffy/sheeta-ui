import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: {
        file: 'index.js',
        format: 'es',
        indent: false,
    },
    plugins: [
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        commonjs(),
        postcss(),
        // terser({
        //     compress: {
        //         pure_getters: true,
        //         unsafe: true,
        //         unsafe_comps: true,
        //         warnings: false
        //     }
        // })
    ]
}














