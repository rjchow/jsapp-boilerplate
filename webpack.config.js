const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ShellOnBuildEndPlugin = require("./webpack-util/shell-on-build-end-webpack-plugin");

const { config } = require("./config/build");

if (!process.env.HIDE_CONFIG) {
  console.log("CONFIG = ", config); // eslint-disable-line no-console
}

const DEV = process.env.NODE_ENV === "development";
const PROD = process.env.NODE_ENV === "production";

module.exports = {
  // Defaults to development, pass --mode production to override
  mode: "development",

  context: path.resolve(__dirname),

  target: "web",

  entry: {
    app: "./src/index.tsx"
  },

  output: {
    filename: "[name].[hash:7].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: config.url.publicPath
  },

  module: {
    rules: [
      // Vanilla CSS
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        loaders: ["style-loader", "css-loader"]
      },
      // PostCSS
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src"),
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 1 }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif|mp4|webm|mp3|ogg|svg)$/,
        loader: "file-loader",
        options: {
          name: "./f/[hash:16].[ext]"
        }
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /\/node_modules\//,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      }
    ]
  },

  plugins: [
    // Inject app config at build-time: see comments in config/index.ts for details
    new webpack.DefinePlugin({
      __WEBPACK_DEFINE_CONFIG_JS_OBJ__: JSON.stringify(config)
    }),
    new webpack.NamedModulesPlugin(),
    ...(DEV
      ? [
          new ShellOnBuildEndPlugin({
            command: "yarn --silent tsc:check:no-error --pretty"
          })
        ]
      : []),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/static/favicon.ico"
    }),
    // Generate .gz for production builds
    // Consider adding brotli-webpack-plugin if your server supports .br
    ...(PROD
      ? [
          new CompressionPlugin({
            include: /\.(js|html|svg)$/
          })
        ]
      : [])
  ],

  // Using inline-source-map for detailed line numbers
  // Switch to cheap-eval-source-map if build times are too long
  devtool: PROD ? false : "inline-source-map",

  externals: {
    cheerio: "window",
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "@cfg": path.resolve(__dirname, "config"),
      "@src": path.resolve(__dirname, "src"),
      "@test": path.resolve(__dirname, "test")
    }
  },

  stats: DEV ? "minimal" : "normal",

  // Used by webpack-serve
  watch: DEV
};
