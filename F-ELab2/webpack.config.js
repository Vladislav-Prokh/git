const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
 entry: {
 main: path.resolve(__dirname, './src/index.js'),
 },
 output: {
 path: path.resolve(__dirname, './dist'),
 filename: '[name].bundle.js',
 }, 
} 



module.exports = {
  output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(process.cwd(), './dist'),
    },
  plugins: [
  new CleanWebpackPlugin(
  {
	cleanOnceBeforeBuildPatterns: [
	        '**/*',
	        '!static-files*',
	        '!directoryToExclude/**',
	    ],
  }
  	),
    new CopyPlugin({
      patterns: [
        { from: "src/pages", to: "" }
      ],
    }),
  ],
};


module.exports = {
  mode: 'development',
 
 devServer: {
        historyApiFallback: true,
      	static: '/dist',
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
 
};

