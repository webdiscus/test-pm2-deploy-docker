module.exports = {
  apps: [
    {
      name: 'docker-pm2-test',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        FORCE_COLOR: 1
      },
    },
  ],

  deploy: {
    docker: {
      user: 'dev',
      host: 'localhost',
      port: 2222,
      repo: 'https://github.com/webdiscus/test-fixtures-node-app.git', // here can be your repo with your node app
      ref: 'origin/master',
      path : '/tmp/app',
      env: {
        NODE_ENV: 'production',
        FORCE_COLOR: 1, // enable color output in docker
      },
      'pre-setup': 'rm -rf /tmp/app', // clear the path to allow new setup
    },
  },
};
