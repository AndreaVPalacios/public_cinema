require("dotenv").config();
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://andreitaestudia:F22TPQGgLbzCVw1L@pm2.xxp90k5.mongodb.net/PM2?retryWrites=true&w=majority&appName=PM2";
console.log(process.env.DB_USER);

async function conDB() {
  await mongoose.connect(URI);
}

module.exports = {
  conDB,
};

// MongoDB
// andreitaestudia
// F22TPQGgLbzCVw1L


