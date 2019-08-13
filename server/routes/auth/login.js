const express = require('express');
const router = express.Router();

const User = require('../../models/userSignupSchema');
const {loginValidationSchema} = require('../../validations/loginValidationSchema');

router.post('/api/auth/login', loginValidationSchema, (req, res) => {
   const body = req.body;
   User.findOne({email: body.email, password: body.password}, (err, data) => {
      if(data !== null) {
         res.json({success: true, err: '', id: data._id, email: data.email})      
      } else {
         res.json({success: false, err: 'Wrong user or password'})
      }
   }); 
})

module.exports = router;
