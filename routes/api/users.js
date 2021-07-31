const express = require('express');
const router = express.Router();

//@route     Get api/users
//@desc      Test route
//@access    Public (Private if token used for authentication)


//router.get('/', (req,res) => res.send('User route'));

//@route     Post api/users
//@desc      Register user
//@access    Public (Private if token used for authentication)


router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route');
}

module.exports = router;