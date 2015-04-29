var webpack = require('webpack');

module.exports = {
  entry: './assets/javascripts/main',

  output: {
    path:     __dirname + '/build/',
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.sass$/, exclude: /node_modules/, loader: 'style!css!sass?indentedSyntax' },
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
  },

  plugins: [
    new webpack.DefinePlugin({
      'environment': {
        'HOST': JSON.stringify('https://rails-new-way.herokuapp.com')
      }
    }),
    new webpack.ProvidePlugin({
      'React': 'react/addons'
    })
  ]
};
