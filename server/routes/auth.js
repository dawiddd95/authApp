const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Signup = require('../models/userSignupSchema');

router.post('/api/auth/signup', [
      check('name')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Minimum 3 characters')
         .escape(),
      check('surname')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Minimum 3 characters')
         .escape(),
      check('email', 'Must be correct email format')
         .not().isEmpty()
         .isEmail().normalizeEmail()
         .escape(),
      check('password', 'Must contain: minimum 8 characters, one numeric and one special character')
         .not().isEmpty()
         .isLength({min: 8})
         .matches(/^(?=.*[A-Z])/)
         .matches(/^(?=.*[0-9])/)
         .matches(/^(?=.*[!@#\$%\^&])/)
         .escape(),
      check('confirmPassword', 'Must match password')
         .escape()
         .custom((value, {req}) => (value === req.body.password)),   
   ], (req, res) => {
      const errors = validationResult(req);
      const body = req.body;
      const signupData = new Signup(body);

      if(errors.isEmpty()) {
         signupData.save(err => console.log(err)); 
         res.end()
      } else {
         return res.status(422).jsonp(errors.array());
      }
   }
)

module.exports = router;