var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '..',

    files: [
      './test/polyfill.js',
      './test/main.js'
    ],

    preprocessors: {
      './test/main.js': ['webpack']
    },

    browsers:   ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters:  ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: '.',   file: 'lcov.info' },
        { type: 'html',     subdir: 'html' }
      ]
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ],
        postLoaders: [{
          test: /\.jsx?$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
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

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-coverage',
      'karma-sinon-chai',
      'karma-phantomjs-launcher'
    ],
  });
}
