'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByUser(ctx) {
    return await strapi.services['user-bookmark-post'].findByUserId(ctx.params.id);
  },
};
