const cracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
