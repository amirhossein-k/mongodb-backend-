const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// register user
const  registerUser = asyncHandler(async(req,res)=>{
  
    const {username,email,password} = req.body  
    
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(404)
        throw new Error ('User Alredy Exist')
    }

    // if user not found in database 
    const user = await User.create({
        username,email,password
    })
    if(user){
        res.status(201).json({
            username: user.username,
            email:user.email,
            password:user.password
        })
    }else{
        res.status(400)
        throw new Error ('Error')
    }
})

module.exports = {registerUser}