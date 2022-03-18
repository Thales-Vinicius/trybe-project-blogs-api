const express = require('express');

const { create } = require('../controllers/category.controller');
const { authValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authValidate,
  create,
);

module.exports = router;