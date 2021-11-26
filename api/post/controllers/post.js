const {sanitizeEntity, logger} = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findDetail(ctx) {
    const id = ctx.params.id;
    let post = await strapi.query('post').findOne({id: id});
    await strapi.services.post.setLikes(post);

    await strapi.services.post.setComment(post);
    return post;
  },

  async findFeed(ctx) {
    let posts = await strapi.query('post').find({_sort: 'id:desc'});
    for (let post of posts) {
      try {
        await strapi.services.post.setLikes(post);
      } catch (e) {
        console.error(e)
      }
    }
    return posts;
  },
};
