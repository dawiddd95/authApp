const express = require('express');
const router = express.Router();

const User = require('../../models/userSignupSchema');
const {loginValidationSchema} = require('../../validations/loginValidationSchema');

router.post('/api/auth/login', loginValidationSchema, (req, res) => {
   const body = req.body;
   User.findOne({email: body.email, password: body.password, active: true}, (err, data) => {
      if(data !== null) {
         res.json({success: true, err: '', email: data.email})      
      } else {
         res.json({success: false, err: 'Wrong user or password', email: ''})
      }
   }); 
})

module.exports = router;
