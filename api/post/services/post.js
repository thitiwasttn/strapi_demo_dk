'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async countLike(post_id) {
    return await strapi.query('post-like').count({post: post_id});
  },
  async setLikes(post) {
    let find = await strapi.services.post.countLike(post.id);
    post.likes = find;
  },
  async setComment(post) {
    post.comments = await strapi.query('comment-post').find({post: post.id,_sort: 'id:desc'});
  },
};
