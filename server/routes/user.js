const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const Users = require('../models/userSignupSchema');

router.get('/api/:id/confirmEmail', (req, res) => {
   const {id} = req.params;
   
   Users.findOne({_id: id}, (err, data) => {
      console.log(err);
      res.json({active: data.active, email: data.email})      
   });
})

router.post('/api/:id/confirmEmail', (req, res) => {
   const body = req.body;
   const host = req.get('host');
   
   Users.findOne({_id: body.id}, (err, data) => {
      const link = `http://${host}/auth/verify?id=${data._id}&apiKey=${data.key}`;
      const mailOptions = {
         to : data.email,
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
      transporter.sendMail(mailOptions, (error, response) => {
         if(error) console.log(error);
         else console.log("Message sent: " + response.message);
      });
   });
})

module.exports = router;