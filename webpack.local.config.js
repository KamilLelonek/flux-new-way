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
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']          },
      { test: /\.sass$/, exclude: /node_modules/, loader: 'style!css!sass?indentedSyntax'         },
      { test: /bootstrap\/js\//,                  loader: 'imports?jQuery=jquery'                 },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,      loader: 'url?mimetype=application/font-woff'    },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,     loader: 'url?mimetype=application/font-woff'    },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,       loader: 'url?mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,       loader: 'file'                                  },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,       loader: 'url?mimetype=image/svg+xml'            }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
