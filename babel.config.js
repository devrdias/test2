module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, targets: { node: 'current' } }],
    'module:metro-react-native-babel-preset',
    ['@babel/preset-typescript', { targets: { node: 'current' } }],
    'module:metro-react-native-babel-preset',
    'react-native-web',
  ],
  plugins: [
    ['babel-plugin-styled-components', { pure: true, ssr: true }],
    'react-native-web',
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
};
