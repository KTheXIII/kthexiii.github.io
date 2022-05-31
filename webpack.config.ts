import path from 'path'
import webpack from 'webpack'
import HTMLPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const env = {
  MODE:           process.env.NODE_ENV,
  APP_NAME:       process.env.npm_package_name,
  VERSION:        process.env.npm_package_version,
  AUTHOR:         process.env.npm_package_author_name,
  DESCRIPTION:    process.env.npm_package_description,
  HOMEPAGE:       process.env.npm_package_homepage,
  REPOSITORY_URL: process.env.npm_package_repository_url,
  COMMIT_HASH:    process.env.GITHUB_SHA || 'development',
  PUBLIC_URL:     process.env.PUBLIC_URL || '/',
  SPONSOR_URL:    process.env.npm_package_funding_url,
  BUILD_DATE:     new Date().toISOString()
}

export default {
  mode: env.MODE,
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: 'vendors.[contenthash].js',
    asyncChunks: true,
    clean: true,
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: {
        MODE:           JSON.stringify(env.MODE),
        APP_NAME:       JSON.stringify(env.APP_NAME),
        VERSION:        JSON.stringify(env.VERSION),
        AUTHOR:         JSON.stringify(env.AUTHOR),
        DESCRIPTION:    JSON.stringify(env.DESCRIPTION),
        HOMEPAGE:       JSON.stringify(env.HOMEPAGE),
        REPOSITORY_URL: JSON.stringify(env.REPOSITORY_URL),
        COMMIT_HASH:    JSON.stringify(env.COMMIT_HASH),
        PUBLIC_URL:     JSON.stringify(env.PUBLIC_URL),
        SPONSOR_URL:    JSON.stringify(env.SPONSOR_URL),
        BUILD_DATE:     JSON.stringify(env.BUILD_DATE)
      }
    }),
    new HTMLPlugin({
      title:       env.APP_NAME,
      author:      env.AUTHOR,
      description: env.DESCRIPTION,

      template: path.resolve(__dirname, 'public/index.html'),
      favicon:  path.resolve(__dirname, 'public/favicon.png'),
      manifest: path.resolve(__dirname, 'public/manifest.json'),
      chunks: ['app'],
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, 'public/manifest.json'),
        path.resolve(__dirname, 'public/robots.txt'),
      ]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
    }
  },
  optimization: {
    chunkIds: 'named',
    concatenateModules: false,
    usedExports: true,
  },
  stats: {
    children: false,
    colors: true,
    modules: false,
    timings: true,
  },
  watchOptions: {
    ignored: /node_modules|build|dist/,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  }
}
