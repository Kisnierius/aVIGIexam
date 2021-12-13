const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dbConfig, secretKey } = require('../config');

const registerUser = async (email, password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  console.log(email,hashedPassword)
  const con = await mysql.createConnection(dbConfig);
  console.log("connected to db")
  const [result] = await con.execute('INSERT INTO users(email, password) VALUES(?, ?)', [email, hashedPassword]);
  console.log(result)
  await con.end();
  return result;
};

const loginUser = async (email, password) => {
  const con = await mysql.createConnection(dbConfig);
  const [result] = await con.execute('SELECT * FROM users WHERE email = ?', [email]);
  await con.end();
  console.log(result);
  const isLoggedIn = bcrypt.compareSync(password, result[0].password);
  console.log('isLoggedIn', isLoggedIn);

  if (!isLoggedIn) {
    return 'Could not authenticate the user. Password or email is incorrect.';
  }

  const token = jwt.sign(
    {
      email: result[0].email,
    },
    secretKey,
  );

  console.log(token);

  return token;
};

const getUserProfile = async (email) => {
  const con = await mysql.createConnection(mysqlConfig);
  const [result] = await con.execute('SELECT *FROM users WHERE email = ?', [email]);

  await con.end();
  return result;
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
