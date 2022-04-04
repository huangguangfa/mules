import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.ts', '.tsx', '.json', '.node']
export default {
    input: 'src/index.ts',
    output:[
        {
            name:"gf-ui",
            file: 'npm/core.umd.js',
            format: 'umd'
        },  
        {
            name:"gf-ui",
            file: 'npm/core.es.js',
            format: 'es'
        }
    ],
    plugins: [ 
        resolve({
            extensions
        }),
        commonjs(),
        babel({ 
            exclude: ['node_modules/**'],
            extensions
        })
    ]
}