const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });
  
    jwt.verify(token, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};