
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('books', table => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
