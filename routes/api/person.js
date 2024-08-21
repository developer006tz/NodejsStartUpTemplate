const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from person API');
});

router.get('/user', (req, res) => {
    let user = req.user;
    res.status(200).json({ message: 'OK', user });
});

module.exports = router