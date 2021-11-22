const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async commentPost(ctx) {
    const user = ctx.state.user;
    let body = ctx.request.body;
    body.comment_by = user.id;
    body.created_by = user.id;
    let entity = await strapi.services['comment-post'].create(body);
    return sanitizeEntity(entity, {model: strapi.models['comment-post']});
  },
};
