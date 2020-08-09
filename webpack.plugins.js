const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyWebpackPlugin({patterns:[
    { from: 'src/assets', to: 'assets' },
    { from: 'src/assets', to: 'main_window/assets'} // TODO how to detect production?!?!??!
  ]}),
];
