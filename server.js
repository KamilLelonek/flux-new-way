var express = require('express');
var app = express();

app.get('/app.js', function (req, res) {
  if (process.env.PRODUCTION) {
    res.sendFile(__dirname + '/build/app.js');
  } else {
    res.redirect('//localhost:9090/build/app.js');
  }
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

if (!process.env.PRODUCTION) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.local.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }
    });
}

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  console.log('Essential React listening at http://localhost:%s', server.address().port);
});
