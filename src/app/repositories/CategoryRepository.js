const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`);
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    return row;
  }

  delete(id) {
    const deleteOp = db.query(`
    DELETE FROM categories
    WHERE id = $1
    `, [id]);
    return deleteOp;
  }
}

module.exports = new CategoryRepository();
