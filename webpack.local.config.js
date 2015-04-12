var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry:  [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './assets/javascripts/main'
  ],

  output: {
    path:       __dirname + '/build/',
    filename:   'app.js',
    publicPath: 'http://localhost:9090/build/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'environment': {
        'HOST': JSON.stringify('http://localhost:3000')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']  },
      { test: /\.sass$/, exclude: /node_modules/, loader: 'style!css!sass?indentedSyntax' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
