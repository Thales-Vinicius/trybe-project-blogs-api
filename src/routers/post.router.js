const express = require('express');

const { create, getAll, getById, update } = require('../controllers/post.controller');
const { authValidate, postValidate, updateValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authValidate,
  postValidate,
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

router.put(
  '/:id',
  authValidate,
  updateValidate,
  update,
);

module.exports = router;