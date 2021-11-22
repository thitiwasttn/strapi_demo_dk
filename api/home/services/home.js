'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async searchPost(title) {
    let params = {
      "title_contains": title,
      "_limit": 10,
      "_sort": 'id:desc'
    }
    return await strapi.query('post').find(params);
  },
  async searchUser(title) {
    let params = {
      "first_name_contains": title,
      "_limit": 10,
      "_sort": 'id:desc'
    }
    const fetch = await strapi
      .query('user-profile')
      .model.query(qb => {
        // `CONCAT_WS(' ',first_name, last_name) LIKE '${title}%'`
        qb.whereRaw(`CONCAT_WS(' ',first_name, last_name) LIKE '%${title}%'`)
        qb.limit(10)
      }).fetchAll();
    return fetch.toJSON();
  },
};

