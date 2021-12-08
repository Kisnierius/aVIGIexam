const express = require('express');
const ownersEntity = require('../database/owners');

const router = express.Router();

const handleGetowners = async (req, res) => {
  try {
    const owners = await ownersEntity.getOwners();
    res.send(owners);
  } catch (e) {
    console.log(e);
  }
};

const handleGetowner = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const owner = await ownersEntity.getOwner(id);
    res.send(owner);
  } catch (e) {
    console.log(e);
  }
};

const handleCreateowner = async (req, res) => {
  try {
    const newOwner = req.body;
    const newownerCreated = await ownersEntity.createOwner(newOwner);
    console.log(newownerCreated);
    res.send(newownerCreated);
  } catch (e) {
    console.log(e);
  }
};

const handleDeleteowner = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await ownersEntity.deleteOwner(id);
    res.send(owner);
  } catch (e) {
    console.log(e);
  }
};

const handleUpdateOwnerContacts = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { email } = req.body;
    const { phone } = req.body;
    console.log(email);
    console.log(phone);
    const ownerContacts = { email, phone };
    console.log('line54router');
    console.log(ownerContacts);
    const owner = await ownersEntity.UpdateOwnerContacts(ownerContacts, id);
    res.send(owner);
  } catch (e) {
    console.log(e);
  }
};

const handleGetownerCars = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const ownerCars = await ownersEntity.getownerCars(id);
    res.send(ownerCars);
  } catch (e) {
    console.log(e);
  }
};

router.get('/owners', handleGetowners);
router.get('/owners/:id', handleGetowner);
router.delete('/owners/:id', handleDeleteowner);
router.post('/owners/:id', handleUpdateOwnerContacts);
router.post('/owners', handleCreateowner);
router.get('/ownerscars/:id', handleGetownerCars);

module.exports = router;
