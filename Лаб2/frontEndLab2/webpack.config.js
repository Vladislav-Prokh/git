const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');


module.exports = {
   entry: {
       		 main: path.resolve(__dirname, './src/index.js'),
   		 },
  output: {
        	path: path.resolve(__dirname, './dist'),
        	filename: '[name].bundle.js',
    	   },

  plugins: [
	 new HtmlWebpackPlugin({
	 title: 'lab2',
	 template: path.resolve(__dirname, './src/pages/about.html'), 
	 filename: 'index.html', 
 }),
	 new CleanWebpackPlugin(),
	  new webpack.HotModuleReplacementPlugin()
 ], 
	
}

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/pages", to: "/dist" }
      ],
    }),
  ],
};

//choosing mode of dev
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

