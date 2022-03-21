const express = require('express');

const { create, getAll } = require('../controllers/category.controller');
const { authValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authValidate,
  create,
);

router.get(
  '/',
  authValidate,
  getAll,
);

module.exports = router;