const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "dist", "cjs", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist", "umd"),
    filename: "[name].min.js",
    libraryTarget: "umd",
    library: "evmChains",
    umdNamedDefine: true,
    globalObject: "this"
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    })
  ]
};
