module.exports = (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });

  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!email.match(/\S+@\S+\.\S+/)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};