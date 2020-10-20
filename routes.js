const express = require('express');
// Create the Router instance.
const router = express.Router();
router.get('/contact', (req, res) => {
 res.send('Contact');
});

router.get('/bio', (req, res) => {
 res.send('Bio');
});

module.exports = router;
