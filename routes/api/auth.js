const express = require('express');
const router = express.Router();

//@route     Get api/auth
//@desc      Test route
//@access    Public (Private if token used for authentication)
router.get('/', (req,res) => res.send('Auth route'));

module.exports = router;