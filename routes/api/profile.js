const express = require('express');
const router = express.Router();

//@route     Get api/profile
//@desc      Test route
//@access    Public (Private if token used for authentication)
router.get('/', (req,res) => res.send('Profile route'));

module.exports = router;