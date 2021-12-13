const express = require('express');
const usersEntity = require('../database/users');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

const handleRegisterUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)
    const data = await usersEntity.registerUser(email, password);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await usersEntity.loginUser(email, password);

    res.cookie('authtoken', token, { httpOnly: true, secure: true, maxAge: 90000 }); // Jeigu naudotume cookies

    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetUserProfile = async (req, res) => {
  try {
    console.log('user in req object', req.user);
    const { email } = req.params;
    const data = await usersEntity.getUserProfile(email);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// const handleUpdateUserProfile = async (req, res) => {
//   try {
//     res.status(200).send('Ok');
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/profile/:email', isAuthenticated, handleGetUserProfile);
// router.patch('/profile/:email', isAuthenticated, handleUpdateUserProfile);

module.exports = router;
