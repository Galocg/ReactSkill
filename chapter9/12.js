{
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
      },
      ‘sass-loader‘
    ),
    sideEffects: true,
  },