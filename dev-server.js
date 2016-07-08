const webpack = require('webpack');
const config = require('./webpack.config.js');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const express = require('express');
const path = require('path');

const compiler = webpack(config);
const app = express();

app.use(dev(compiler, { publicPath: config.output.publicPath }));
app.use(hot(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.err(err);
  }
});
