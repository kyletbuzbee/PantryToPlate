// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/app.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output to public directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JS files
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve from public directory
    compress: true,
    port: 9000, // Port for the dev server
  },
  mode: 'development',
};
