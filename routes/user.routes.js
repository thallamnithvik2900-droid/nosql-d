const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json({ message: "Get all users" });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).json({ message: "User created" });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;