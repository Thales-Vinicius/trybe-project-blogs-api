const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = await loginService.login(email, password);

    if (!userLogin) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ userLogin });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  login,
};