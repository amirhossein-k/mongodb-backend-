const express= require('express')
const connectDb= require('./CONFIG/db')
const cors= require('cors')
const dotenv= require('dotenv')

const userRoutes = require('./routes/userRoutes')


dotenv.config()
const app = express()
app.use(cors({orgin:"*"}))
app.use(express.json())
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)

})
connectDb()


// router

app.use('/api/test',(req,res)=> res.send({message:'hello'}))
app.use('/api/user',userRoutes)


