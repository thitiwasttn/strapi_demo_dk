module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '172.17.0.1'),
        port: env.int('DATABASE_PORT', 3304),
        database: env('DATABASE_NAME', 'strapi_dk'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'password'),
      },
      options: {},
    },
  },
});
