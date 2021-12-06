const path = require("path");

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|)$/i,
        loader: "url-loader",
        options: {
          limit: 1024,
          name: "./images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
};
