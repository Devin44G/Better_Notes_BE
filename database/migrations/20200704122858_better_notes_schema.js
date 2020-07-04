
exports.up = function(knex) {
  return knex.schema
  // USER TABLE
    .createTable('user', tbl => {
      tbl.increments();

      tbl.string('username', 25)
        .notNullable()
        .unique();

      tbl.string('password', 28)
        .notNullable();
    })
  // NOTES TABLE
    .createTable('notes', tbl => {
      tbl.increments();

      tbl.string('title', 30)
        .notNullable();

      tbl.text('description')

      tbl.date('date_created')
        .notNullable();

      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.shema
    .dropTableIfExists('notes')
    .dropTableIfExists('user');
};
