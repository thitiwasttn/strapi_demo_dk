const {sanitizeEntity} = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async byUser(ctx) {
    const userId = ctx.state.user.id;
    console.log(await strapi.query('user-commu').find({}));
    const newVar = await strapi.query('user-commu').find({users_permissions_user: userId});
    console.log(newVar);
    return newVar;
  },
};
