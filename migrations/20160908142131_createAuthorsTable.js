
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('authors', table => {
    table.increments('id').primary
		table.string('first_name')
		table.string('last_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
