module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@features': './src/features',
          '@assets': './src/assets',
          '@store': './src/store',
          '@src': './src',
        },
      },
    ],
  ],
};
