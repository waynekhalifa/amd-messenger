var path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "amd/src/index.js"),
  },
  output: {
    path: path.join(__dirname, "amd/build"),
    filename: "[name].min.js",
    library: "amd",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
