require('dotenv').config();

module.exports = {
  portCon: process.env.PORT || 8080,
  dbConfig: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  secretKey: process.env.SECRET_KEY,
};
