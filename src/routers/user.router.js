const express = require('express');

const { create, getAll } = require('../controllers/user.controller');
const { nameValidate, passwordValidate, emailValidate, authValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  nameValidate,
  passwordValidate,
  emailValidate,
  create,
);

router.get(
  '/',
  authValidate,
  getAll,
);

module.exports = router;