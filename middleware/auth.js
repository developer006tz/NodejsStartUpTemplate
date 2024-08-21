const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] || req.body.token || req.query.token;

    if (!token) {
      return res.status(401).json({ message: 'A token is required for authentication' });
    }

    const { id } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'role','phone'],
    });

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { authenticateUser };