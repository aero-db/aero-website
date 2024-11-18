module.exports = {
  apps: [
    {
      name: 'AeroDb Website',
      exec_mode: 'cluster',
      port: process.env.PORT || 3000,
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
