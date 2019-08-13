const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const nodemailer = require("nodemailer");

const User = require('../../models/userSignupSchema');
const {signupValidationSchema} = require('../../validations/signupValidationSchema');

router.post('/api/auth/signup', signupValidationSchema, (req, res) => {
   const errors = validationResult(req);
   const body = req.body;
   const userData = new User({
      ...body, 
      key: uuid.v4()
   });
   const host = req.get('host');
   const link = `http://${host}/auth/verify?id=${userData._id}&apiKey=${userData.key}`;

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
      User.findOne({email: body.email}, (err, data) => {
         if(data === null) {
            userData.save(err => console.log(err))
            transporter.sendMail(mailOptions, (error, response) => {
               if(error) console.log(error);
               else console.log("Message sent: " + response.message);
            });
            res.json({success: true, err: '', id: userData._id})      
         } else {
            res.json({success: false, err: 'Email is already in usage'})
         }
      });
   } else {
      return res.status(422).jsonp(errors.array()); 
   }
})

module.exports = router;