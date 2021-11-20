module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '61.19.242.56'),
        port: env.int('DATABASE_PORT', 3304),
        database: env('DATABASE_NAME', 'strapi_dk'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'password'),
      },
      options: {},
    },
  },
});
