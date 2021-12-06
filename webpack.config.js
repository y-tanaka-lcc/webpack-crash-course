const path = require("path");

// このファイルが存在する絶対パスとdistとを「 / 」で連結する
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
};
