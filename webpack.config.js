const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // webpack optimization mode
  mode: process.env.NODE_ENV || "development",

  // entry file(s)
  entry: "./src/client/index.jsx",

  // output file(s) and chunks
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].main.js", // uses hash in filename
    publicPath: "/"
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ],

  // development server configuration
  devServer: {
    // must be `true` for SPAs
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080'
    },
    // open browser on server start
    open: !process.env.NODE_ENV === "production",
  },

  // generate source map
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-eval-source-map"
};
