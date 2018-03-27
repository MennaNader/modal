const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[name]__[hash:base64:5]",
              sourceMap: false
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        include: /(node_modules)/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
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
        test: /\.json?$/,
        loaders: ["json"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
