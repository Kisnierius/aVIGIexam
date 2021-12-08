const express = require('express');
const carsEntity = require('../database/cars');

const router = express.Router();

const handleGetcars = async (req, res) => {
  try {
    const cars = await carsEntity.getcars();
    res.send(cars);
  } catch (e) {
    console.log(e);
  }
};

const handleGetcar = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const car = await carsEntity.getcar(id);
    res.send(car);
  } catch (e) {
    console.log(e);
  }
};

const handleCreatecar = async (req, res) => {
  try {
    const newcar = req.body;
    const newcarCreated = await carsEntity.createcar(newcar);
    console.log(newcarCreated);
    res.send(newcarCreated);
  } catch (e) {
    console.log(e);
  }
};

const handleDeletecar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carsEntity.deletecar(id);
    res.send(car);
  } catch (e) {
    console.log(e);
  }
};

const handleUpdateOwnerId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { owner_id } = req.body;
    console.log(owner_id);
    const car = await carsEntity.UpdateOwnerId(owner_id, id);
    res.send(car);
  } catch (e) {
    console.log(e);
  }
};

router.get('/cars', handleGetcars);
router.get('/cars/:id', handleGetcar);
router.delete('/cars/:id', handleDeletecar);
router.post('/cars/:id', handleUpdateOwnerId);
router.post('/cars', handleCreatecar);

module.exports = router;
