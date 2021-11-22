'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async findByUserId(userId) {
    return await strapi.query('user-bookmark-post').find({user: userId});
  }
};
