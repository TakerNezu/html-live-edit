import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import babel        from 'rollup-plugin-babel'

export default {
    input: 'dist/index.js',
    output: {
        file: 'library/index.js',
        format: 'umd',
        name: 'LiveEditHTML'
    },
    plugins: [
        nodeResolve(), // npmモジュールを`node_modules`から読み込む
        commonjs(), // CommonJSモジュールをES6に変換
        // babel() // ES5に変換
    ]
}
