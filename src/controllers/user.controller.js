const userService = require('../services/user.service');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.create(displayName, email, password, image);

    if (!user) return res.status(409).json({ message: 'User already registered' });

    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};