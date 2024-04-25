import { apiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHanlder.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req,res)=>{
    /*res.status(200).json({
        message:"Ok"
    })*/       //api response

    //HOW TO REGISTER USER
    // get user details from frontend
    // validation - not empty
    // check if user already exists : username,email
    // check for images: check for avatar
    // check upload on cloudinary: avatar
    // check for cover image
    // create user object : create db entry
    // remove password and refresh token from response
    // check for user creation 
    // return response

    const {username,email,password} = req.body
    console.log(email)

    if (
        [username,email,password].some((field)=>
        field?.trim()==="")
    ) {
        throw new apiError(400,"All fields are required")
    }

   const existedUser = user.findOne({
        $or: [{ username },{ email }] //$or means if username os email exist
    })
    if (existedUser) {
        throw new apiError(407,"User with this username or email already exist")
    }
   const avatarLocalPath =  req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage[0]?.path
   
       if (!avatarLocalPath) {
           throw new apiError(400,"Avatar image is required")
        }
        
        const avatar =   await  uploadOnCloudinary(avatarLocalPath)
        const coverImage =   await  uploadOnCloudinary(coverImageLocalPath)
        if (!avatar) {
         throw new apiError(400,"Avatar image is required")
        
     }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
     })
     const createdUser = await user.findById(user._id).select(
        "-passwod  -refreshToken"
     )
     if(!createdUser){
        throw  new apiError(500,"Something went wrong while registering the user")
     }

     return res.status(201).json(
        new ApiResponse(200,"User registered successfully")
     )
})

export {registerUser}
