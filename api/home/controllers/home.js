const {sanitizeEntity} = require('strapi-utils');
const pino = require('pino')('./public/logger.log')
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
    pino.info(custom_model);
    return custom_model;
  },
};
