const path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [{
      test: /\.css/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}
