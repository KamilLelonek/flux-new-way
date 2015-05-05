var webpackConfig = require('../webpack.local.config.js');

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
        loaders: webpackConfig.module.loaders,
        postLoaders: [{
          test:    /\.jsx?$/,
          exclude: /(test|node_modules)\//,
          loader:  'istanbul-instrumenter'
        }]
      },
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins
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
    ]
  })
};
