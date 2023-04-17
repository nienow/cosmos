const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ZipPlugin = require('zip-webpack-plugin');

const PACKAGE = require('./package.json');
const version = PACKAGE.version;

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: 'index.tsx',
    demo: 'demo/demo.tsx',
    plain: 'plain/plain.tsx',
    draw: 'draw/draw.tsx',
    sketch: 'sketch/sketch.tsx'
  },
  output: {
    filename: "[name].[contenthash].js",
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    'filesafe-js': {}
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: "preact/compat",
      'react-dom': "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "react-jsx-runtime": "preact/jsx-runtime"
    }
  },
  devServer: {
    hot: false,
    https: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "plain.html",
      template: "./src/index.html",
      chunks: ["plain"]
    }),
    new HtmlWebpackPlugin({
      filename: "draw.html",
      template: "./src/index.html",
      chunks: ["draw"]
    }),
    new HtmlWebpackPlugin({
      filename: "sketch.html",
      template: "./src/index.html",
      chunks: ["sketch"]
    }),
    new HtmlWebpackPlugin({
      filename: "demo.html",
      template: "./src/index.html",
      chunks: ["demo"]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          transform(content) {
            return content
              .toString()
              .replace('$VERSION$', version);
          }
        }
      ]
    }),
    new ZipPlugin({
      filename: `latest.zip`
    })
  ],
});
