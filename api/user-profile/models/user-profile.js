'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Called before an entry is created
    beforeCreate(data) {
    },
    // Called after an entry is created
    afterCreate(result, data) {
      strapi.services.history.create({
          contentType: 'user-profile',
          action: 'create',
          author: result.created_by,
          content: data,
          raw: result
        }
      )
    },
    afterUpdate(result, params, data) {
      strapi.services.history.create({
          contentType: 'user-profile',
          action: 'update',
          author: result.updated_by,
          content: data,
          raw: result
        }
      )
    },
  },
};
