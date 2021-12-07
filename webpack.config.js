const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// このファイルが存在する絶対パスとdistとを「 / 」で連結する
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //   },
        // },
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|)$/i,
        loader: "url-loader",
        options: {
          limit: 1024,
          name: "./images/[name].[ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      // OptimizeCSSAssetsPlugin
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};
