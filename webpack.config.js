const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['babel-plugin-styled-components', 'react-native-web'],
    },
  },
};

const typescriptLoaderConfiguration = {
  test: /\.(ts|tsx)$/,
  include: path.resolve(appDirectory, 'src'),
  use: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const shouldAnalyzeBundle = !!process.env.ANALYZE_BUNDLE;

  return {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(appDirectory, 'dist'),
    },
    module: {
      rules: [babelLoaderConfiguration, typescriptLoaderConfiguration, imageLoaderConfiguration],
    },
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
        '/dist': path.resolve(appDirectory, 'dist'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: isDevelopment ? [] : [new TerserPlugin()],
    },
    plugins: [
      shouldAnalyzeBundle &&
        new BundleAnalyzerPlugin({
          excludeAssets: '/node_modules/',
        }),
    ].filter(Boolean),
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      historyApiFallback: true,
      port: 19006,
      hot: true,
    },
  };
};
