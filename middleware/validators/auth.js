const { body } = require('express-validator');
const { reporter } = require('./common');
const { User } = require('../../database/models');

const createAccount = [

  body('fullName')
      .trim()
      .notEmpty().withMessage('Name is required')
      .if(body('name').notEmpty())
      .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters long'),

  body('email')
    .optional({ values: 'null' })
    .trim()
    .if(body('email').notEmpty())
    .isEmail().withMessage('Invalid email address'),

  body('photo')
    .optional({ values: 'null' })
    .isURL()
    .withMessage('Invalid photo'),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone is required')
    .if(body('phone').notEmpty())
    .isMobilePhone().withMessage('Invalid phone number'),

  body('username')
    .trim()
    .notEmpty().withMessage('Username is required')
    .custom(async (value) => {
      const user = await User.findOne({ where: { username: value } });
      if (user) {
        throw new Error('Username already exists');
      }
    }),
   body('password')
   .trim()
   .notEmpty().withMessage('The password field is required')
   .if(body('password').notEmpty())
   .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
   ,
  reporter,
];

const login = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
  reporter,
];

const changePassword = [
  body('currentPassword')
    .notEmpty()
    .withMessage('The current password field is required'),

  body('newPassword')
    .notEmpty()
    .withMessage('The new password field is required')
    .bail()
    .custom(async (value, { req }) => {
      if (value === req.body.currentPassword) {
        throw new Error('New password cannot be the same as current password');
      }
    }),
  reporter,
];


module.exports = { createAccount, login, changePassword };
