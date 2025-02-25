// Create web server
const express = require('express');
const router = express.Router();

// Create a comment
router.post('/comments', (req, res) => {
    res.send('You are on the comments page');
});

module.exports = router;