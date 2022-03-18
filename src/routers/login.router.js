const express = require('express');

const { login } = require('../controllers/login.controller');
const { passwordValidate, emailValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  passwordValidate,
  emailValidate,
  login,
);

module.exports = router;