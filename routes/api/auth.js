const express = require('express');
const router = express.Router();
const validators = require('../../middleware/validators/auth');
const controller = require('../../controllers/auth');

router.post('/login', validators.login, controller.login);
router.post('/register', validators.createAccount, controller.createAccount);
router.post('/change-password',validators.changePassword,controller.changePassword);

module.exports = router;