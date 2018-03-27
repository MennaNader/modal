const webpack = require("webpack");
const path = require("path");

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.join(process.cwd(), ""),
  entry: ["babel-polyfill", "./index.jsx"],

  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    sourceMapFilename: "[name].map"
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2016", "react", "es2015-ie"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        enforce: "pre", //to check source files, not modified by other loaders (like babel-loader)
        test: /\.js$/,
        loader: "eslint-loader"
      },
      {
        test: /\.(scss|css)$/,

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js"], // extensions that are used
    modules: [path.join(process.cwd(), ""), "node_modules"] // directories where to look for modules
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    publicPath: "/",
    port: 9000,
    contentBase: path.join(process.cwd(), "dist"), // static file location
    host: "localhost",
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: "minimal",
    hot: true // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: process.cwd() }),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
