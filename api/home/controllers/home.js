const {sanitizeEntity} = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

function searchPost() {

}

module.exports = {
  async search(ctx) {
    let custom_model = {};
    let query = ctx.query['query'];

    custom_model.posts = await strapi.services.home.searchPost(query);
    custom_model.users = await strapi.services.home.searchUser(query);
    return custom_model;
  },
};
