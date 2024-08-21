const express  = require('express');
const personRouter = require('./person');
const authenticatedRouter = require('./authenticated');

const router = express.Router();

router.use('/authenticated', authenticatedRouter);
router.use('/person', personRouter);

module.exports = router;