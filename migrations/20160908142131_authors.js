
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', table => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
