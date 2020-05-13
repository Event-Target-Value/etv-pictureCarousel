var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = [
//   {
//     name: 'client',
//     entry: path.join(__dirname,'client', 'src','index.jsx'),
//     module: {
//       rules: [
//         {
//           test: /\.jsx$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//             },
//           },
//         },
//       ],
//     },
//     output: {
//       filename: 'bundle.js',
//       path: path.join(__dirname, 'client', 'dist'),
//       publicPath: '/',
//     },
//   },
//   // { 
//   //   name: 'style',
//   //   entry: path.join(__dirname, 'client','src','style.css'),
//   //   output: {
//   //     filename: 'style.module.css',
//   //     path: path.join(__dirname, 'client', 'src'),
//   //   },
//   //   module: {
//   //     rules: [
//   //       {
//   //         test: /\.css$/i,
//   //         exclude: /node_modules/,
//   //         use: [
//   //           'style-loader',
//   //           {
//   //             loader: 'css-loader',
//   //             options: {
//   //               modules: true,
//   //             },
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
//   // },
// ];

module.exports = [
  {
    name: 'client',
    entry: path.join(__dirname,'client', 'src','index.jsx'),
    module: {
      rules: [
        {
          test: /\.jsx$/,
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
          use: [
            'style-loader', 'css-loader',
          ],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'client', 'dist'),
      publicPath: '/',
    },
  },
];