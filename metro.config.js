/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const OriginalResolver = require('metro-resolver');
const path = require('path');

// We shim react-dom, because it's reference in craftjs (RenderIndicator),
// but is not actually used in view-only mode.
// https://github.com/facebook/metro/issues/519#issuecomment-862073446
const blacklistedModules = ['react-dom'];

module.exports = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (blacklistedModules.includes(moduleName)) {
        return {
          filePath: path.resolve(__dirname + '/shim-module.js'),
          type: 'sourceFile',
        };
      } else {
        return OriginalResolver.resolve(
          {...context, resolveRequest: undefined},
          moduleName,
          platform,
        );
      }
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};
