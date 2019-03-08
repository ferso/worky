/**
 * Characters.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name:'string',
    slug:'string',
    link:'string',
    img:'string',
    infobox:'string',
    content: { type: 'json', columnType: 'array' }
  },
};
