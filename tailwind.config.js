// TW Elements is free under AGPL, with a commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
/** @type {import('tailwindcss').Config} */

var path = require('path');

module.exports = {
  module: {
    rules: [
      // Transform all ES6 files to plain old ES5.
      {
        test: /\.(js|jsx)$/,
        exclude: [/bower_components/, /node_modules/, /styles/],
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../../src')
      },
      // Load images.
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
        include: path.resolve(__dirname, '../../')
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        query: {
          name: 'static/media/files/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  /**
   * Resolve import paths from global.SRCDIR
   * @see  http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
   */
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules'),
    ],
    extensions: ['.js', '.jsx']
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFAF0',
          100: '#FFF5E1',
          200: '#f3e2bc',
          300: '#FFD700',
          400: '#FFCA6A',
          500: '#f7cb14',
          600: '#e4b40c',
          700: '#bf9006',
          800: '#bd8509',
          900: '#976503',
        },
      },
      keyframes: () => ({
        slideRight: {
          "0%": { opacity: 0, marginLeft: "-600px" },
          "100%": { opacity: 1, marginLeft: "0" },
        },
        slideLeft: {
          "0%": { opacity: 0, marginRight: "-600px" },
          "100%": { opacity: 1, marginRight: "0" },
        },
      }),
      animation: {
        slideRight: "slideRight 1s ease-in",
        slideLeft: "slideLeft 1s ease-in",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
