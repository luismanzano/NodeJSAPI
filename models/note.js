const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const mongoPassword = process.env.MONGO_PASSWORD

const url =
`mongodb+srv://luisfmanzanoa:${mongoPassword}@cluster0.rxxgwte.mongodb.net/?retryWrites=true&w=majority`;

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: {type: String, required: true, minLength: 1},
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)