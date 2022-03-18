const express = require('express');

const { create } = require('../controllers/user.controller');
const { nameValidate, passwordValidate, emailValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  nameValidate,
  passwordValidate,
  emailValidate,
  create,
);

module.exports = router;