const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const nodemailer = require("nodemailer");

const User = require('../../models/userSignupSchema');

router.post('/api/auth/forgot-password', (req, res) => {
   const body = req.body; 
   const newPassword = `#${uuid.v4()}`;
   User.findOneAndUpdate({email: body.email, active: true}, {password: newPassword}, (err, data) => {
      if(data !== null) {
         const email = data.email;
         
         const mailOptions = {
            to : email,
            subject : "Reset your password for company managment app",
            html : `
               Hello,<br> 
               This is your new password to your 
               <strong>${email}</strong> 
               account in Company Managment App.<br>
               <h1 style="color: #F5222D;">${newPassword}</h1>
               Now you can log in to your account with this new password and change your password in user settings panel.<br>
               If you didn’t ask to reset your account password, you can ignore this email.<br>
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
         res.json({success: true, text: 'Password reset email sent successfully'})      
      } else {
         res.json({success: false, text: `Sorry, we don't recognize your credentials`})
      }
   }); 
})

module.exports = router;