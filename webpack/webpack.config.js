const path = require('path');
const getEntries = require('./entries');

const root = path.join(__dirname, '..');
console.log(root);
module.exports = {
  mode: 'production',
  entry: getEntries(path.join(root, 'src'), ''),
  // output: {
  //   path: path.join(root, 'dist'),
  //   filename: '[name].[contenthash].js',
  // },
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].js', // если написать someName.[name] содержимое библиотеки окажется в одном объекте someName
    libraryTarget: 'commonjs',
    assetModuleFilename: 'images/[name][ext]',
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.join(root, 'tsconfig.json'),
        }
      },
      {
        use: [
          {
            loader: 'url-loader',
          },
          ],
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/resource',
      },
    ],
  },
}
