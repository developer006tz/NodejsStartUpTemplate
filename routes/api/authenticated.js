const express = require('express');
const router = express.Router();
const { getAuthenticatedUser } = require('../../controllers/auth');

router.get('/user', getAuthenticatedUser);

module.exports = router