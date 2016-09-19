exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert({first_name: 'Jack', last_name: 'Kerouac'}),
    knex('authors').insert({first_name: 'Hanif', last_name: 'Kureishi'}),
    knex('authors').insert({first_name: 'F. Scott', last_name: 'Fitzgerald'}),
    knex('authors').insert({first_name: 'John', last_name: 'Steinbeck'}),
    knex('authors').insert({first_name: 'Hunter S.', last_name: 'Thompson'}),
    knex('authors').insert({first_name: 'Anne', last_name: 'Salmond'}),
    knex('authors').insert({first_name: 'William S.', last_name: 'Burroughs'}),
    knex('authors').insert({first_name: 'Charles', last_name: 'Dickens'}),
    knex('authors').insert({first_name: 'Elizabeth', last_name: 'Knox'}),
    knex('authors').insert({first_name: 'John', last_name: 'Mulgan'}),
    knex('authors').insert({first_name: 'J.K.', last_name: 'Rowling'})
  );
};
