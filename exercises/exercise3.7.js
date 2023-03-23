// CONNECT TO MONGODB 
const mongoose = require('mongoose');

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }

  if (process.argv.length<5) {
    console.log('Missing Phone or Name argument')
    process.exit(1)
  }

  process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });
  
  const password = process.argv[2]
const phoneArg = process.argv[3]
const name = process.argv[4]
  
  const url =
    `mongodb+srv://luisfmanzanoa:${password}@cluster0.rxxgwte.mongodb.net/?retryWrites=true&w=majority`
  
  mongoose.set('strictQuery',false)
  mongoose.connect(url)
  
  const phoneSchema = new mongoose.Schema({
    number: String,
    name: String,
  })
  
  const Phone = mongoose.model('Phone', phoneSchema)


if (!!phoneArg && !!name) {
  const phone = new Phone({
    number: `${phoneArg}`,
    name: `${name}`,
  })
  
  phone.save().then(result => {
    console.log('phone saved!')
    console.log(result)
    mongoose.connection.close()
  })
//   process.exit(1)
} else {
      Phone.find({}).then(result => {
        result.forEach(phone => {
          console.log(phone)
        })
        mongoose.connection.close()
      })
    
}

