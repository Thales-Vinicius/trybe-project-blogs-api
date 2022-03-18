const express = require('express');

const { create, getAll, getById } = require('../controllers/user.controller');
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

router.get(
  '/:id',
  authValidate,
  getById,
);

module.exports = router;