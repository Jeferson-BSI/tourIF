module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          alias: {
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@global": "./src/global",
            "@services": "./src/services",
          },
        },
      ],
    ],
    
  };
};
