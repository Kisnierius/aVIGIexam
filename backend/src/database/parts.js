const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const getpart = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [part] = await con.execute('SELECT * FROM part_used WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return part;
  } catch (e) {
    return { error: e };
  }
};

const getparts = async () => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [parts] = await con.execute('SELECT * FROM part_used');
    await con.end();
    return parts;
  } catch (e) {
    return e;
  }
};

const createpart = async (newpart) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [newpartCreated] = await con.execute('INSERT INTO part_used (part_title, part_comment, part_price, repair_id, user_id) VALUES(?, ?, ?, ?, ?)', [newpart.part_title, newpart.part_comment, newpart.part_price, newpart.repair_id, newpart.user_id]);
    await con.end();
    return newpartCreated;
  } catch (e) {
    return e;
  }
};

const deletepart = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [part] = await con.execute('DELETE FROM part_used WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return part;
  } catch (e) {
    return { error: e };
  }
};

const getpartRepairs = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [partCars] = await con.execute('SELECT part_used.*, repair.repair_title, users.email From part_used JOIN repair ON part_used.repair_id=repair.id  JOIN users ON part_used.user_id=users.id WHERE part_used.id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return partCars;
    //  res.status(200).json(part);
  } catch (e) {
    return { error: e };
  }
};

module.exports = {
  getpart,
  getparts,
  createpart,
  deletepart,
  getpartRepairs,
};
