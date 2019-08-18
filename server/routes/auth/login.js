// Robic od :
// How I set up React and Node with JSON Web Token for Authentication  =>  od Server Side
// A Practical Guide for JWT Authentication using Nodejs and Express  => od obrazku flow

// TYAJ SIE CHYBA WERYFIKUJE TOKEN
// -----------------------------------------------

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/userSignupSchema');
const {loginValidationSchema} = require('../../utils/validations/login');

router.post('/api/auth/login', loginValidationSchema,(req, res) => {
   const {email, password} = req.body;

   User.findOne({email, active: true}, (err, data) => {
      if(data !== null) {
         bcrypt.compare(password, data.password, (err, result) => {
            if(result) {
               res.json({success: true, err: '', id: data._id})
            }
            else res.json({success: false, err: 'Wrong user or password', id: ''})
         })
      } else {
         res.json({success: false, err: 'Wrong user or password', id: ''})
      }
   }); 
})

module.exports = router;