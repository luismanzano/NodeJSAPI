require('dotenv').config()

const PORT = process.env.PORT
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGODB_URI = process.env.MONGODB_URI
module.exports = {
    MONGO_PASSWORD,
    MONGODB_URI,
  PORT
}