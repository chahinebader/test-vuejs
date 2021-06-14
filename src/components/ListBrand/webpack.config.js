module.exports = {
    // This is the "main" file which should include all other modules
    entry: './app/main.js',
    // Where should the compiled file go?
    output: {
        path: './dist',
        filename: 'build.js',
        // ↓↓↓↓↓add this to make dev-server working
        publicPath: 'dist/', 
    },
    module: {
      // Special compilation rules
      loaders: [
        {
          // Ask webpack to check: If this file ends with .js, then apply some transforms
          test: /\.js$/,
          // Transform it with babel
          loader: 'babel',
          // don't transform node_modules folder (which don't need to be compiled)
          exclude: /node_modules/
        },
        {
            test: /\.vue$/,
            loader: 'vue'
        }
      ]
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    },
    vue: {
      loaders: {
        js: 'babel'
      }
    }
  }