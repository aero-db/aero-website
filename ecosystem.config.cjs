module.exports = {
  apps: [
    {
      name: 'AeroDb Website',
      exec_mode: 'cluster',
      port: '8080',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
