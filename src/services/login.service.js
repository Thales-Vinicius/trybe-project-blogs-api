const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const login = async (email, password) => {
  const emailExist = await User.findOne({ where: { email } });

  if (!emailExist) return null;

  if (emailExist.password !== password) return null;
  
  const tokenData = jwtGenerator({ id: emailExist.id, displayName: emailExist.displayName, email });

  return tokenData;
};

module.exports = {
  login,
};