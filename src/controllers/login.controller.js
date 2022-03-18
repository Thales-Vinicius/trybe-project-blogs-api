const loginService = require('../services/login.service');
const jwtGenerator = require('../helpers/jwtGenerator');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = await loginService.login(email, password);

    if (!userLogin) return res.status(400).json({ message: 'Invalid fields' });

    const token = jwtGenerator(userLogin);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  login,
};