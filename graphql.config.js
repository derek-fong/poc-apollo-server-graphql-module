module.exports = {
  extensions: {
    codegen: {
      './src/graphql-codegen-typings.d.ts': {
        plugins: ['typescript'],
      },
    },
  },
  schema: './src/**/*.graphql',
};
