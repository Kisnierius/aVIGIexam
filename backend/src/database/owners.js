const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const getOwner = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [owner] = await con.execute('SELECT * FROM Owner WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return owner;
  } catch (e) {
    return { error: e };
  }
};

const getOwners = async () => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [owners] = await con.execute('SELECT * FROM Owner');
    await con.end();
    return owners;
  } catch (e) {
    return e;
  }
};

const createOwner = async (newOwner) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [newownerCreated] = await con.execute('INSERT INTO Owner (name, surname, email, phone) VALUES(?, ?, ?, ?)', [newOwner.name, newOwner.surname, newOwner.email, newOwner.phone]);
    await con.end();
    return newownerCreated;
  } catch (e) {
    return e;
  }
};

const deleteOwner = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [owner] = await con.execute('DELETE FROM Owner WHERE id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return owner;
  } catch (e) {
    return { error: e };
  }
};

const UpdateOwnerContacts = async (ownerContacts, id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    console.log(id, ownerContacts);
    const { email } = ownerContacts;
    const [owner] = await con.execute('UPDATE Owner SET email = ? WHERE id = ?', [email, id]); // su klaustuku prepared statement
    await con.end();
    return owner;
  } catch (e) {
    return { error: e };
  }
};

const getownerCars = async (id) => {
  try {
    const con = await mysql.createConnection(dbConfig);
    const [ownerCars] = await con.execute('SELECT Owner.*, Cars.make, Cars.model, Cars.year, Cars.plateNo, Cars.id From Owner RIGHT JOIN Cars ON Owner.id=Cars.owner_id WHERE Owner.id = ?', [id]); // su klaustuku prepared statement
    await con.end();
    return ownerCars;
    //  res.status(200).json(owner);
  } catch (e) {
    return { error: e };
  }
};

module.exports = {
  getOwner,
  getOwners,
  createOwner,
  deleteOwner,
  UpdateOwnerContacts,
  getownerCars,
};
