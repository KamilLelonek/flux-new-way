var webpack = require('webpack');

module.exports = function(config) {
  var customLaunchers = {
    sl_chrome: {
      base:        'SauceLabs',
      browserName: 'chrome'
    },
    sl_firefox: {
      base:        'SauceLabs',
      browserName: 'firefox'
    },
    sl_ie: {
      base:        'SauceLabs',
      browserName: 'internet explorer'
    }
  }

  config.set({
    files: [
      './test/polyfill.js',
      './test/main.js'
    ],

    basePath: '..',

    preprocessors: {
      './test/main.js': ['webpack']
    },

    browsers:   Object.keys(customLaunchers),
    frameworks: ['mocha', 'sinon-chai'],
    reporters:  ['dots',  'saucelabs'],

    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      plugins: [
        new webpack.DefinePlugin({
          'environment': {
            'HOST': JSON.stringify('http://localhost:5000')
          }
        })
      ]
    },

    webpackMiddleware: {
      noInfo: true
    },

    singleRun: true,

    sauceLabs: {
      testName: 'Flux New Way Unit Tests'
    },

    customLaunchers: customLaunchers,

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sinon-chai',
      'karma-sauce-launcher'
    ],
  });
}
