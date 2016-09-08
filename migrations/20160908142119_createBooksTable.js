
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('books', table => {
    table.increments('id').primary
    table.string('title').notNullable()
    table.integer('year').notNullable()
    table.string('isbn')
    table.string('my_description')
    table.string('google_description')
    table.boolean('have_read').notNullable()
    table.boolean('lent_it').notNullable()
    table.boolean('wishlist').notNullable()
    table.integer('author_id').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books')
};
