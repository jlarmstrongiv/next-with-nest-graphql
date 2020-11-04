// Nest.js
// https://docs.nestjs.com/graphql/cli-plugin#using-the-cli-plugin
// https://github.com/nestjs/graphql/issues/800#issuecomment-639018893
// Next.js
// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
module.exports = {
  webpack: (config, options) => {
    const tsLoader = {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: (program) => ({
          before: [require('@nestjs/graphql/plugin').before({}, program)],
        }),
      },
      exclude: /node_modules/,
    };
    config.module.rules.unshift(tsLoader);

    return config;
  },
};
