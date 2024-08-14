const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
entry: './script.js',
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
},

module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000
  },
mode: 'development',
plugins: [
new HtmlwebpackPlugin({

    template: path.join(__dirname, 'index.html')
})
]
}