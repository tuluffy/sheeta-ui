import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';
import { buildWithCache } from './rollup.config/cache';
import { buildWithWarn } from './rollup.config/warn';

export default {
    input: 'src/main.js',
    output: {
        file: 'index.js',
        format: 'es',
    },
    cache: buildWithCache,
    onwarn: buildWithWarn,
    plugins: [
        postcss(),
        babel({exclude: 'node_modules/**'}),
        commonjs({
            include: 'node_modules/**',
        }),
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        license({
            banner: `@description React component with es module \n @email tuluffy@163.com \n @date <%= moment().format('YYYY-MM-DD') %>`
        })
    ],
    external: ['react', 'react-dom']
}