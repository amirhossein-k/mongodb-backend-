const mongoose = require('mongoose')
const connectDb= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('success to mongo')
    }catch(error){
        console.log(`Erorr: ${error.message}`)
        process.exit()
    }
}

module.exports = connectDb