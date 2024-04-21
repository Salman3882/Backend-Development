import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:[true,"username is required"],
            lowercase:true,
            unique:true,
            trim:true,
            index:true

        },
        email:{
            type:String,
            required:[true,"email is required"],
            lowercase:true,
            unique:true,
            trim:true
        },
        fullName:{
            type:String,
            required:true,
            index:true,
            unique:true
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        avatar:{
            type:String,
            required:true ///cloudinary url
        },
        coverImage:{
            type:String // cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type:String,
        }


    }
    ,{timestamps:true})

    userSchema.pre("save",async function (next){
        if (!this.isModified("password")) return next() // password is encrypted only if password is modified
      this.password = bcrypt.hash(this.password,10)  // encrypt the password and use 10 rounds
         next()
    })
    userSchema.methods.isPasswordCorrect = async  function(password){
    return await    bcrypt.compare(password,this.password)
    }
    userSchema.methods.generateAccessToken = function (){
        jwt.sign(
            {
                _id : this._id,
                username:this.username,
                fullName:this.fullName,
                email:this.email
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn : process.env.ACCESS_TOKEN_EXPIIRY
            }
        )
    }
    userSchema.methods.generateRefreshToken = function (){
        jwt.sign(
            {
                _id : this._id,
            
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn : process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }
export const User = mongoose.model("User",userSchema)