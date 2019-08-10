const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const nodemailer = require("nodemailer");

const Signup = require('../models/userSignupSchema');
const {signupValidationSchema} = require('../validations/signupValidationSchema');
const {loginValidationSchema} = require('../validations/loginValidationSchema');

// router.post('/confirmation', userController.confirmationPost);
// router.post('/resend', userController.resendTokenPost);


router.post('/api/auth/login', loginValidationSchema, (req, res) => {
   const body = req.body;

   Signup.findOne({email: body.email, password: body.password}, (err, data) => {
      if(data != null) {
         res.json({success: true, err: ''})      
      } else {
         res.json({success: false, err: 'Wrong user or password'})
      }
   }); 
})



router.post('/api/auth/signup', signupValidationSchema, (req, res) => {
      const errors = validationResult(req);
      const body = req.body;
      const signupData = new Signup({...body, key: uuid.v4()});
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
               res.json({success: true, err: '', host: host})      
            } else {
               res.json({success: false, err: 'Email is already in usage'})
            }
         });
      } else {
         return res.status(422).jsonp(errors.array()); 
      }
   }
)


router.get('/auth/verify', (req, res) => {
   const {id, apiKey} = req.query;
   const host = req.get('host');
   const link = `${req.protocol}://${host}`;

   if(link === `http://${host}`) {
      Signup.findOneAndUpdate({_id: id, key: apiKey, active: false}, {active: true}, (err, data) => {
         if(data !== null) {
            res.send(`
               <div style="width: 360px; height: 200px; margin: 10px auto 0 auto; box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12); display: flex; flex-direction: column;">
                  <h1 style="font-weight: normal;margin: 40px 0 0 20px;font-size: 22px; font-family: Calibri">
                     Your email has been verified
                  </h1>
                  <p style="padding: 10px 20px;font-size:18px;font-family:Calibri;color: rgba(0,0,0,0.8)">
                     You can now sign in with your new account
                  </p>
               </div>
            `)
         } else {
            res.send(`
               <div style="width: 360px; height: 200px; margin: 10px auto 0 auto; box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12); display: flex; flex-direction: column;">
                  <h1 style="font-weight: normal;margin: 40px 0 0 20px;font-size: 22px; font-family: Calibri">
                     Try verifying your email again
                  </h1>
                  <p style="padding: 10px 20px;font-size:18px;font-family:Calibri;color: rgba(0,0,0,0.8)">
                     Your request to verify your email has expired or the link has already been used
                  </p>
               </div>
            `);
         }
      })
   }
})

module.exports = router;