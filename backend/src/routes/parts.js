const express = require('express');
const partsEntity = require('../database/parts');

const router = express.Router();

const handleGetparts = async (req, res) => {
  try {
    const parts = await partsEntity.getparts();
    res.send(parts);
  } catch (e) {
    console.log(e);
  }
};

const handleGetpart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const part = await partsEntity.getpart(id);
    res.send(part);
  } catch (e) {
    console.log(e);
  }
};

const handleCreatepart = async (req, res) => {
  try {
    const newpart = req.body;
    const newpartCreated = await partsEntity.createpart(newpart);
    console.log(newpartCreated);
    res.send(newpartCreated);
  } catch (e) {
    console.log(e);
  }
};

const handleDeletepart = async (req, res) => {
  try {
    const { id } = req.params;
    const part = await partsEntity.deletepart(id);
    res.send(part);
  } catch (e) {
    console.log(e);
  }
};

// const handleUpdatepartContacts = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const { email } = req.body;
//     const { phone } = req.body;
//     console.log(email);
//     console.log(phone);
//     const partContacts = { email, phone };
//     console.log('line54router');
//     console.log(partContacts);
//     const part = await partsEntity.UpdatepartContacts(partContacts, id);
//     res.send(part);
//   } catch (e) {
//     console.log(e);
//   }
// };

const handleGetpartsRepair = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const partCars = await partsEntity.getpartRepairs(id);
    res.send(partCars);
  } catch (e) {
    console.log(e);
  }
};

router.get('/parts', handleGetparts);
router.get('/parts/:id', handleGetpart);
router.delete('/parts/:id', handleDeletepart);
// router.post('/parts/:id', handleUpdatepartContacts);
router.post('/parts', handleCreatepart);
router.get('/partsrepairs/:id', handleGetpartsRepair); // Repair ID

module.exports = router;