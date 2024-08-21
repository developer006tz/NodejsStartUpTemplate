const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User } = require('../database/models');

const createAccount = async (req, res) => {
  try {
    const { fullName, phone, email, role, photo, username, password, status } = req.body;

    const user = await User.create({
      fullName,
      phone,
      email,
      role,
      photo,
      username,
      password: bcrypt.hashSync(password, 10),
      status,
    })

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );

    const userData = {
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status
    };

    res.status(200).json({ message: 'Created successfully', data: userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  const { username , password } = req.body;

  try {
      const user = await User.findOne({
        where: {
          username: username,
          status: 'active',
        },
        attributes: { include: 'password' },
      });

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
            role: user.role
          },
          process.env.SECRET_KEY,
          {
            expiresIn: req.body.remember ? '30d' : '1h',
          }
        );
        const userData = {
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          role: user.role,
          status: user.status
        };

        return res.status(200).json({ message: 'Login successful', data: userData, token });
      }

      res.status(403).json({ message: 'Wrong username/password combination' });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: { include: 'password' },
      });

      if (user && bcrypt.compareSync(currentPassword, user.password)) {
        user.password = await bcrypt.hash(newPassword, 10);
        user.save();
        return res.status(200).json({ message: 'Password changed successfully' });
      }
      res.status(422).json({ message: 'Incorrect current password' });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getAuthenticatedUser = async (req, res) => {
  let data = null;
  if (req.user) data = req.user;
  if (!data) return res.status(401).json({ message: 'Unauthorized' });
  res.status(200).json({ message: 'OK', data });
};


module.exports = { createAccount, login, changePassword, getAuthenticatedUser };
