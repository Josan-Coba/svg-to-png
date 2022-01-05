const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PRODUCTION_PUBLIC_PATH = '/svg-to-png/'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    devMiddleware: {
      publicPath: isProduction ? PRODUCTION_PUBLIC_PATH : '/',
    },
    headers: {
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist/'),
    },
  },
  devtool: isProduction ? undefined : 'source-map',
  entry: { index: path.resolve(__dirname, 'src/index.ts') },
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        include: path.resolve(__dirname, 'src/'),
        loader: 'source-map-loader',
        test: /\.js$/i,
      },
      {
        include: [path.resolve(__dirname, 'src/')],
        test: /\.(t|j)s(x?)$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'tailwindcss',
                  'postcss-custom-properties',
                  'autoprefixer',
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    assetModuleFilename: 'static/[hash][ext][query]',
    clean: true,
    filename: 'artifacts/[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: isProduction ? PRODUCTION_PUBLIC_PATH : '/',
  },
  plugins: [
    new ESLintPlugin({ context: 'src/' }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'artifacts/[name].css',
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      filename: 'index.html',
      googleAnalytics: {
        measurementId: 'G-4C0XKPNWDZ',
      },
      inject: false,
      links: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        {
          crossOrigin: '',
          href: 'https://fonts.gstatic.com',
          rel: 'preconnect',
        },
        'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Montserrat+Alternates:wght@500;600&family=Montserrat:wght@400;500;600;700&family=Noto+Sans+Symbols+2&display=swap',
      ],
      mobile: true,
      template: '!!ts-loader!src/index.template',
      title: 'SVG to PNG',
    }),
    new FaviconsWebpackPlugin({
      favicons: {
        appDescription: null,
        background: '#4A0734',
        developerURL: null,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
        theme_color: '#FF92DA',
      },
      inject: true,
      logo: './src/static/logo.svg',
      mode: 'webapp',
      prefix: 'static/',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/.nojekyll' },
        { from: 'src/static/', to: 'static/' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json', '.mjs', '.wasm'],
  },
  target: 'web',
}
