module.exports = {
  apps: [
    {
      name: 'AeroDb Website',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
