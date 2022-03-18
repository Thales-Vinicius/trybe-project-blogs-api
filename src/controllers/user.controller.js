const userService = require('../services/user.service');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.create(displayName, email, password, image);

    if (!user) return res.status(409).json({ message: 'User already registered' });

    const token = jwtGenerator(user);

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allUsers = await userService.getAll();

    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
  getAll,
};