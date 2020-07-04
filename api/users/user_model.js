const db = require('../../database/db_config');

module.exports = {
  findById,
  add,
  findBy
};

function findById(id) {
  return db('user')
    .where({ id })
    .first()
    .select('id', 'username');
}

async function add(user) {
  const [id] = await db('user').insert(user, 'id');

  return findById(id);
}

function findBy(filter) {
  return db('user').where(filter).first();
}
