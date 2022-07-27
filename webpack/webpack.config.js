const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const getEntries = require('./entries');

const root = path.join(__dirname, '..');
console.log(root);
module.exports = {
  mode: 'production',
  entry: getEntries(path.join(root, 'src'), ''),
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
    assetModuleFilename: 'images/[name][ext]',
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: path.join(root, 'types.d.ts'), to: path.join(root, 'dist', 'types.d.ts')},
      ],
    }),
  ],
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
      },
    ],
  },
}
