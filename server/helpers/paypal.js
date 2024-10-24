const paypal = require("paypal-rest-sdk");
require('dotenv').config();

paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox', // 'sandbox' หรือ 'live'
  client_id: process.env.PAYPAL_CLIENT_ID, // ดึงค่าจากไฟล์ .env
  client_secret: process.env.PAYPAL_CLIENT_SECRET, // ดึงค่าจากไฟล์ .env
});

module.exports = paypal;
