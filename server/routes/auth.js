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
      
      // scieżka get do obslugi weryfikacji ktora mam wpisane: api/auth/:id/verify/:hash
      // link z Pet Hotel: https://pet-hotel-prod.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=x7tUaxjymTP0VqRMdzqbug-1y-J2mBy9i0RIz8yD_pYAAAFscfog_A&apiKey=AIzaSyDq4zY5q0Iwl61pDv_wWnm47ThM_CAgsxA&lang=en
      // link ktory dostaje na mail:  http://localhost:5000/verify?id=undefined
      // link ktory skomponowalem: `http://${host}/auth/verify?id=${signupData._id}&apiKey=${signupData.key}`
      // link ktory miałem: const link = `http://${host}/verify?id=${body.key}`; 

      // host ma byc na local:3000
      // const host = req.get('host') === 'localhost:5000' ? 'localhost:3000' : req.get('host');
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
            if(data == null) {
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
   // niech renderuje wtedy statyczny plik html
   console.log(`${req.protocol}:/${req.get('host')}`);

   const host = req.get('host');
   const link = `${req.protocol}://${host}`;
   
   // res.json({host: req.protocol, link: link})

   // Zwraca nam ładnie nagłówek
   res.send(`<h1>Hello there</h1>`)
   // niech pokaze id z url i key z url




   
   // if(link === `http://${host}`) {
   //    console.log("Domain is matched. Information is from Authentic email");
   //    if(req.query.id==rand) {
   //       console.log("email is verified");
   //       res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
   //    } else {
   //       console.log("email is not verified");
   //       res.end("<h1>Bad Request</h1>");
   //    }
   // } else {
   //    res.end("<h1>Request is from unknown source</h1>");
   // }
})

module.exports = router;