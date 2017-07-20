import ExtractTextPlugin from 'extract-text-webpack-plugin'

const postcssPlugins = [
  require('postcss-modules-local-by-default'),
  require('postcss-import'),
  require('postcss-cssnext'),
  require('postcss-nested'),
  require('cssnano')({
    safe: true,
    sourcemap: true,
    autoprefixer: false
  })
]

export default {
  test: /\.(css)$/,

  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          localIdentName: '[hash:base64]',
          camelCase: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: postcssPlugins,
          importLoaders: 1
        }
      }
    ]
  }),
  exclude: /node_modules/
}
