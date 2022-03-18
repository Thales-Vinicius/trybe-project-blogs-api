const { User } = require('../models');
// const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (displayName, email, password, image) => {
  const emailExist = await User.findOne({ where: { email } });

  if (emailExist) return null;

  const newUser = await User.create({ displayName, email, password, image });

  const tokenData = { id: newUser.id, displayName, email };

  // const tokenData = jwtGenerator({ id: newUser.id, displayName, email });

  return tokenData;
};

const getAll = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });

  return allUsers;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return null;

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};