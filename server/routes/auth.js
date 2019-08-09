const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const nodemailer = require("nodemailer");

const Signup = require('../models/userSignupSchema');
const {validationSchema} = require('../validations/signupValidationSchema');

//  /auth/<id>/verify/<verification hash>
// router.post('/confirmation', userController.confirmationPost);
// router.post('/resend', userController.resendTokenPost);

router.post('/api/auth/signup', validationSchema, (req, res) => {
      const errors = validationResult(req);
      const body = req.body;
      const signupData = new Signup({...body, key: uuid.v4()});
      

      const link = `http://${req.get('host')}/verify?id=${body.key}`; 
      const mailOptions = {
         to : body.email,
         subject : "Please confirm your Email account",
         html : `
            Hello,<br> 
            Follow this link to verify your email address.<br>
            <a href=${link}>Click here to verify</a><br>
            If you didn’t ask to verify this address, you can ignore this email.<br>
            Thanks,<br>
            Your company managment app team.
         `
      };
      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: "company.managment.app.team@gmail.com",
            pass: "Dawidov121"
         }
      });

      if(errors.isEmpty()) {
         Signup.findOne({email: body.email}, (err, data) => {
            if(data == null) {
               signupData.save(err => console.log(err))
               transporter.sendMail(mailOptions, (error, response) => {
                  if(error) console.log(error);
                  else console.log("Message sent: " + response.message);
               });
               res.json({err: ''})      
            } else {
               res.json({err: 'Email is already in usage'})
            }
         });
      } else {
         return res.status(422).jsonp(errors.array()); 
      }
   }
)

module.exports = router;