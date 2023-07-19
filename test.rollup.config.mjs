import serve from 'rollup-plugin-serve'
import live from './dist/index.cjs.js'

export default {
  input: './test/entry.js',
  output: {
    file: './test/dest.js',
    format: 'cjs',
  },
  plugins: [
    serve({
      contentBase: './test',
      port: Math.round(Math.random() * 10000) + 40000,
    }),
    live(),
  ],
}
