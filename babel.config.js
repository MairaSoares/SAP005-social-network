module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          port: process.env.PORT || 5000
        },
      },
    ],
  ],
};
