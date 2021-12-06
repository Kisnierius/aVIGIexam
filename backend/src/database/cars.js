const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const getcar = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [car] = await con.execute('SELECT * FROM cars WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return car;
  //  res.status(200).json(car);
  } catch (e) {
    return { error: e };
  }
};

const getcars = async () => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [cars] = await con.execute('SELECT * FROM cars');
    await con.end();
    return cars;
  } catch (e) {
    return e;
  }
};

const createcar = async (newcar) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [newcarCreated] = await con.execute('INSERT INTO cars (make, model, year, plateNo, owner_id) VALUES(?, ?, ?, ?, ?)', [newcar.make, newcar.model, newcar.year, newcar.plateNo, newcar.owner_id]);
    await con.end();
    return newcarCreated;
  } catch (e) {
    return e;
  }
};

const deletecar = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [car] = await con.execute('DELETE FROM cars WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return car;
  } catch (e) {
    return { error: e };
  }
};

const UpdateOwnerId = async (owner_Id, id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [car] = await con.execute('UPDATE cars SET owner_id = ? WHERE id = ?', [owner_Id, id]); // su klaustuku prepared statement
    await con.end();
    return car;
  } catch (e) {
    return { error: e };
  }
};

module.exports = {
  getcar,
  getcars,
  createcar,
  deletecar,
  UpdateOwnerId,
};
