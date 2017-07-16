const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // modulesDirectories: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './src',
    publicPath: '/dist',
    port: 9000,
    inline: true
  }
}
