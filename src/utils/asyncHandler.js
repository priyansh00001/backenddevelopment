const asyncHandler = (requestHandler) => (req , res , next) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next) . catch((err) => next(err)))
    }
}

export { asyncHandler };

//isme ham try catch ka bhi use kar sakte hai but ye jyada better hai kyuki isme har ek route ke liye alag se try catch nahi lagana padta
//iske alawa ye async await ke sath bhi use ho sakta hai

// code for express async handler middleware using try catch without promise

// const asyncHandler = (requestHandler) => (req , res , next) => {
//     (req,res,next) => {
//         try{
//             await requestHandler(req,res,next)
//         }catch(err){
//             next(err)
//         }
//     }
// }

// do tarike se likh skte hai async handler middleware ko
// eek promises k through and eek try catch k through jisme ham async await ka use karte hai

// dono me se pehla tarika jyada better hai kyuki isme har ek route ke liye alag se try catch nahi lagana padta
// aur ye async await ke sath bhi use ho sakta hai