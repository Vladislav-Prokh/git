const path = require('path')
 const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	 entry: {
	 main: path.resolve(__dirname, './src/index.js'),
	 },
	output: {
	 path: path.resolve(__dirname, './dist'),
	 filename: '[name].bundle.js',
	 },
	  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/pages", to: "sources/pages" },
        { from: "src/assets", to: "sources/assets" }
      ],
    }),
  ], 
}
