const path = require('path');

module.exports = [
  {
    context: path.join( __dirname, '/' ),
    entry: {
      'main': path.resolve(__dirname, 'app/src/ts/main.tsx')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'app/assets/js'),
      library: '[name]'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js']
    },  
    module: {
      rules: [
        { 
          test: /\.tsx?$/, 
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    }
  }
]