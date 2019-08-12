const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const nodemailer = require("nodemailer");

// tutaj potem zmienic na User i model tez na User
const Signup = require('../models/userSignupSchema');
const {signupValidationSchema} = require('../validations/signupValidationSchema');
const {loginValidationSchema} = require('../validations/loginValidationSchema');

router.post('/api/auth/login', loginValidationSchema, (req, res) => {
   const body = req.body;

   Signup.findOne({email: body.email}, (err, data) => {
      if(data !== null) {
         res.json({success: true, err: '', id: data._id, email: data.email})      
      } else {
         res.json({success: false, err: 'Wrong user or password'})
      }
   }); 
})

router.post('/api/auth/forgot-password', (req, res) => {
   const body = req.body; 

   Signup.findOneAndUpdate({email: body.email, active: true}, {key: uuid.v4()}, (err, data) => {
      if(data !== null) {
         const host = req.get('host');
         const link = `http://${host}/auth/password?id=${data._id}&apiKey=${data.key}`;

         const mailOptions = {
            to : body.email,
            subject : "Reset your password for company managment app",
            html : `
               Hello,<br> 
               Follow this link to change your account password.<br>
               <a href=${link}>${link}</a><br>
               If you didn’t ask to change your account password, you can ignore this email.<br>
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

         transporter.sendMail(mailOptions, (error, response) => {
            if(error) console.log(error);
            else console.log("Message sent: " + response.message);
         });
         res.json({success: true, err: '', ok: 'Password reset email sent successfully', id: data._id, email: data.email})      
      } else {
         res.json({success: false, err: `Sorry, we don't recognize your credentials`, ok: ''})
      }
   }); 
})

router.post('/api/auth/signup', signupValidationSchema, (req, res) => {
      const errors = validationResult(req);
      const body = req.body;
      const signupData = new Signup({
         ...body, 
         key: uuid.v4()
      });
      const host = req.get('host');
      const link = `http://${host}/auth/verify?id=${signupData._id}&apiKey=${signupData.key}`;

      const mailOptions = {
         to : body.email,
         subject : "Please confirm your Email account",
         html : `
            Hello,<br> 
            Follow this link to verify your email address.<br>
            <a href=${link}>${link}</a><br>
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
            if(data === null) {
               signupData.save(err => console.log(err))
               transporter.sendMail(mailOptions, (error, response) => {
                  if(error) console.log(error);
                  else console.log("Message sent: " + response.message);
               });
               res.json({success: true, err: '', id: signupData._id})      
            } else {
               res.json({success: false, err: 'Email is already in usage'})
            }
         });
      } else {
         return res.status(422).jsonp(errors.array()); 
      }
   }
)

// to nie jest api tylko strony z emailu
router.get('/auth/verify', (req, res) => {
   const {id, apiKey} = req.query;
   const host = req.get('host');
   const link = `${req.protocol}://${host}`;

   if(link === `http://${host}`) {
      Signup.findOneAndUpdate({_id: id, key: apiKey, active: false}, {active: true}, (err, data) => {
         if(data !== null) {
            res.sendFile('verified.html', {root: './public'});
         } else {
            res.sendFile('expired.html', {root: './public'});
         }
      })
   }
})

module.exports = router;