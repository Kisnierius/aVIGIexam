const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const getrepair = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [repair] = await con.execute('SELECT * FROM repair WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return repair;
  } catch (e) {
    return { error: e };
  }
};

const getrepairs = async () => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [repairs] = await con.execute('SELECT * FROM repair');
    await con.end();
    return repairs;
  } catch (e) {
    return e;
  }
};

const createrepair = async (newrepair) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [newrepairCreated] = await con.execute('INSERT INTO repair (repair_title, repair_comment, price, car_id, owner_id, user_id, part_id) VALUES(?, ?, ?, ?, ?, ?, ?)', [newrepair.repair_title, newrepair.repair_comment, newrepair.price, newrepair.car_id, newrepair.owner_id, newrepair.user_id, newrepair.part_id]);
    await con.end();
    return newrepairCreated;
  } catch (e) {
    return e;
  }
};

const deleterepair = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [repair] = await con.execute('DELETE FROM repair WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return repair;
  } catch (e) {
    return { error: e };
  }
};

const getrepairCars = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [repairCars] = await con.execute('SELECT repair.*, Cars.plateNo, part_used.part_title, part_used.part_comment, users.email From repair JOIN Cars ON repair.car_id=Cars.id  JOIN users ON repair.user_id=users.id JOIN part_used ON repair.car_id=part_used.car_id WHERE repair.car_id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return repairCars;
    //  res.status(200).json(repair);
  } catch (e) {
    return { error: e };
  }
};

module.exports = {
  getrepair,
  getrepairs,
  createrepair,
  deleterepair,
  getrepairCars,
};
