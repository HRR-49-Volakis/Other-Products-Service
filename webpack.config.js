const path = require('path');

const SRC = path.join(__dirname, '/client/src/');
const PUBLIC = path.join(__dirname, '/public/');

module.exports = {
  // mode: 'development',
  entry: `${SRC}index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${PUBLIC}`),
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    }],
  },
};
