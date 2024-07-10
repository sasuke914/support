const express = require("express");
const router = express.Router();
const { sendEmail, verifyEmail, rePassword, changePass } = require('../controllers/emailController')

router.route('/').post(sendEmail);
router.route('/verify').post(verifyEmail)
router.route('/sendRepassword').post(rePassword);
router.route('/changepass').post(changePass)

module.exports = router;
