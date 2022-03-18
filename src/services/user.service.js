const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (displayName, email, password, image) => {
  console.log(email);
  const emailExist = await User.findOne({ where: { email } });

  if (emailExist) return null;

  const newUser = await User.create({ displayName, email, password, image });

  const tokenData = jwtGenerator({ id: newUser.id, displayName, email });

  return tokenData;
};

module.exports = {
  create,
};