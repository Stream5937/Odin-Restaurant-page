const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Restaurant Page',
        watchFiles: ['./src/*.*', './src/index.js', './src/index.html', 'public/**/*'],
        inject:false,   //stops double loading
    }),
  ],
  output: {
    //NOT using  .[contenthash]  to provide unique bundle name each time thus avoid build from cache
    //Not working filename: 'bundle.[contenthash].js',
    //Not working filename: '[name].[contenthash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  /* dealing with caching NOT working yet!
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',       //  'hashed',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        },
    },
},
*/
};
