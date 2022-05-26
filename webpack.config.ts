import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const APP_NAME = process.env.npm_package_name
const AUTHOR   = process.env.npm_package_author_name

export default {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: APP_NAME,
      author: AUTHOR,

      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.png'),
      manifest: path.resolve(__dirname, 'public/manifest.json'),
      chunks: ['app'],
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {}
  },
  stats: {
    children: false,
    colors: true,
    modules: false,
    timings: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  }
}
