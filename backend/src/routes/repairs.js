/////////  NEBAIGTA!!!!!

const express = require('express');
const repairsEntity = require('../database/repairs');

const router = express.Router();

const handleGetrepairs = async (req, res) => {
  try {
    const repairs = await repairsEntity.getrepairs();
    res.send(repairs);
  } catch (e) {
    console.log(e);
  }
};

const handleGetrepair = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const repair = await repairsEntity.getrepair(id);
    res.send(repair);
  } catch (e) {
    console.log(e);
  }
};

const handleCreaterepair = async (req, res) => {
  try {
    const newrepair = req.body;
    const newrepairCreated = await repairsEntity.createrepair(newrepair);
    console.log(newrepairCreated);
    res.send(newrepairCreated);
  } catch (e) {
    console.log(e);
  }
};

const handleDeleterepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await repairsEntity.deleterepair(id);
    res.send(repair);
  } catch (e) {
    console.log(e);
  }
};

// const handleUpdaterepairContacts = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const { email } = req.body;
//     const { phone } = req.body;
//     console.log(email);
//     console.log(phone);
//     const repairContacts = { email, phone };
//     console.log('line54router');
//     console.log(repairContacts);
//     const repair = await repairsEntity.UpdaterepairContacts(repairContacts, id);
//     res.send(repair);
//   } catch (e) {
//     console.log(e);
//   }
// };

const handleGetrepairsCar = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const repairCars = await repairsEntity.getrepairCars(id);
    res.send(repairCars);
  } catch (e) {
    console.log(e);
  }
};

router.get('/repairs', handleGetrepairs);
router.get('/repairs/:id', handleGetrepair);
router.delete('/repairs/:id', handleDeleterepair);
// router.post('/repairs/:id', handleUpdaterepairContacts);
router.post('/repairs', handleCreaterepair);
router.get('/repairscars/:id', handleGetrepairsCar); // CAR ID

module.exports = router;