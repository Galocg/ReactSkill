const nodeExternals = require(‘webpack-node-externals‘);
(…)


module.exports = {
  (…)
  resolve: {
    modules: [‘node_modules‘]
  },
  externals: [nodeExternals()]
};