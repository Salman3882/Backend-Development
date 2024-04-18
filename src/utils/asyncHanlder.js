const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{
                next(err)
        })
    }
}
export { asyncHandler }

//ANOTHER WAY

// consst asyncHanlder = (fn)=> async ()=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
        // res.status(err.code ]] 500).json({
            // success:false,
            // message:err.message
        // })
//     }
// }


// const asyncHandler = (requestHandler)=>{
//     (req,res,next)=>{
//         Promise.resolve(requestHandler(req,res,next))
//         .catch((err)=>{
//             next(err)
//         })
//     }

// }




















// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `fdsfds${this.password}jsdklfjkdslj`
//     }
// }


// const salman = new user("salman","salman@gmail.com","salman3882")

// console.log(salman.email)

// class teacher extends user {
//     constructor(username,professor,subject){
//         super(username)
//         this.professor = professor,
//         this.subject = subject
//     }
//     displayInfo(){
//         return(
//             `the name is ${username}`
//             `the professor is : ${this.professor} and his subject is ${this.subject}`
//         )
//     }
// }

// const wasif = new teacher("wasif","computer science","wasif naeem")

// console.log(wasif.displayInfo())