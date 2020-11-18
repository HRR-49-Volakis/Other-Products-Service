const path = require('path');

// const COMPONENTS = path.join(__dirname, 'client/components/');
const SRC = path.join(__dirname, '/client/src/');
const PUBLIC = path.join(__dirname, '/public/');

// For our css modules these will be locally scoped
// const CSSModuleLoader = {
//   loader: 'css-loader',
//   options: {
//     modules: true,
//     localIdentName: '[name]_[local]_[hash:base64:5]',
//     importLoaders: 2,
//     camelCase: true,
//     sourceMap: false, // turned off as causes delay
//   },
// };
// // For our normal CSS files we would like them globally scoped
// const CSSLoader = {
//   loader: 'css-loader',
//   options: {
//     modules: 'global',
//     importLoaders: 2,
//     camelCase: true,
//     sourceMap: false, // turned off as causes delay
//   },
// };
// // Our PostCSSLoader
// const autoprefixer = require('autoprefixer');

// const PostCSSLoader = {
//   loader: 'postcss-loader',
//   options: {
//     ident: 'postcss',
//     sourceMap: false, // turned off as causes delay
//     plugins: () => [
//       autoprefixer({
//         browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
//       }),
//     ],
//   },
// };

// // Standard style loader (prod and dev covered here)
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';
// const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {

  devtool: 'inline-source-map',
  mode: 'development',
  entry: `${SRC}index.jsx`,
  watch: true,
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
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      ],
    },
    ],
  },
};
