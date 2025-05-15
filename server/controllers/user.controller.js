// import sendEmail from '../config/sendEmail.js'
import { generatedOtp, verifyEmailTemplate, sendEmail } from '../utils/verifyEmailTemplate.js';
import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
// import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'
import generatedAccessToken from '../utils/generatedAccessToken.js'
import genertedRefreshToken from '../utils/generatedRefreshToken.js'
import uploadImageClodinary from '../utils/uploadImageClodinary.js'
// import generatedOtp from '../utils/generatedOtp.js'
import forgotPasswordTemplate from '../utils/forgotPasswordTemplate.js'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

export async function registerUserController(request, response) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(400).json({
                message: "Provide name, email, and password",
                error: true,
                success: false
            });
        }

        const existingUser = await UserModel.findOne({ email }).session(session);

        if (existingUser && existingUser.verify_email) {
            return response.status(400).json({
                message: "Email is already registered",
                error: true,
                success: false
            });
        }

        if (existingUser && !existingUser.verify_email) {
            const currentTime = new Date().toISOString();
            if (existingUser.verify_email_expiry > currentTime) {
                await session.commitTransaction();
                session.endSession();
                return response.status(200).json({
                    message: "Verification email already sent. Check your inbox.",
                    error: false,
                    success: true
                });
            } else {
                const otp = generatedOtp();
                const expireTime = new Date(Date.now() + 60 * 60 * 1000);

                existingUser.verify_email_otp = otp;
                existingUser.verify_email_expiry = expireTime;
                await existingUser.save({ session });

                await sendEmail({
                    sendTo: email,
                    subject: "Verify Your Email - GrocyGo",
                    html: verifyEmailTemplate({
                        name: existingUser.name,
                        otp: otp
                    })
                });

                await session.commitTransaction();
                session.endSession();
                return response.status(200).json({
                    message: "New OTP sent. Check your email to verify your account.",
                    error: false,
                    success: true
                });
            }
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const otp = generatedOtp();
        const expireTime = new Date(Date.now() + 60 * 60 * 1000);

        const newUser = new UserModel({
            name,
            email,
            password: hashPassword,
            verify_email: false,
            verify_email_otp: otp,
            verify_email_expiry: expireTime
        });

        await newUser.save({ session });

        await sendEmail({
            sendTo: email,
            subject: "Verify Your Email - GrocyGo",
            html: verifyEmailTemplate({
                name,
                otp: otp
            })
        });

        await session.commitTransaction();
        session.endSession();

        return response.status(201).json({
            message: "User registered successfully. Check your email to verify your account.",
            error: false,
            success: true
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return response.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
}


// Verify Email OTP
export async function verifyEmailController(request, response) {
    try {
        const { email, otp } = request.body;

        if (!email || !otp) {
            return response.status(400).json({
                message: "Provide required field email and otp.",
                error: true,
                success: false
            });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return response.status(400).json({
                message: "Email not registered",
                error: true,
                success: false
            });
        }

        const currentTime = new Date().toISOString();
        
        // Check if OTP is expired
        if (user.verify_email_expiry < currentTime) {
            return response.status(400).json({
                message: "OTP has expired",
                error: true,
                success: false
            });
        }

        // Check if OTP is correct
        if (otp !== user.verify_email_otp) {
            return response.status(400).json({
                message: "Invalid OTP",
                error: true,
                success: false
            });
        }

        // If OTP is correct and not expired, verify email
        await UserModel.findByIdAndUpdate(user._id, {
            verify_email_otp: "",
            verify_email_expiry: "",
            verify_email: true
        });

        return response.json({
            message: "Email verified successfully",
            error: false,
            success: true
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}









// export async function registerUserController(request,response){
//     try {
//         const { name, email , password } = request.body

//         if(!name || !email || !password){
//             return response.status(400).json({
//                 message : "provide email, name, password",
//                 error : true,
//                 success : false
//             })
//         }

//         const user = await UserModel.findOne({ email })

//         if(user){
//             return response.json({
//                 message : "Already register email",
//                 error : true,
//                 success : false
//             })
//         }

//         const salt = await bcryptjs.genSalt(10)
//         const hashPassword = await bcryptjs.hash(password,salt)

//         const payload = {
//             name,
//             email,
//             password : hashPassword
//         }

//         const newUser = new UserModel(payload)
//         const save = await newUser.save()

//         const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

//         const verifyEmail = await sendEmail({
//             sendTo : email,
//             subject : "Verify email from binkeyit",
//             html : verifyEmailTemplate({
//                 name,
//                 url : VerifyEmailUrl
//             })
//         })

//         return response.json({
//             message : "User register successfully",
//             error : false,
//             success : true,
//             data : save
//         })

//     } catch (error) {
//         return response.status(500).json({
//             message : error.message || error,
//             error : true,
//             success : false
//         })
//     }
// }

// export async function verifyEmailController(request,response){
//     try {
//         const { code } = request.body

//         const user = await UserModel.findOne({ _id : code})

//         if(!user){
//             return response.status(400).json({
//                 message : "Invalid code",
//                 error : true,
//                 success : false
//             })
//         }

//         const updateUser = await UserModel.updateOne({ _id : code },{
//             verify_email : true
//         })

//         return response.json({
//             message : "Verify email done",
//             success : true,
//             error : false
//         })
//     } catch (error) {
//         return response.status(500).json({
//             message : error.message || error,
//             error : true,
//             success : true
//         })
//     }
// }

// export async function registerUserController(request, response) {
//     try {
//         const { name, email, password } = request.body;

//         if (!name || !email || !password) {
//             return response.status(400).json({
//                 message: "Provide name, email, and password",
//                 error: true,
//                 success: false
//             });
//         }

//         const existingUser = await UserModel.findOne({ email });
//         if (existingUser) {
//             return response.status(400).json({
//                 message: "Email is already registered",
//                 error: true,
//                 success: false
//             });
//         }

//         const salt = await bcryptjs.genSalt(10);
//         const hashPassword = await bcryptjs.hash(password, salt);

//         const otp = generatedOtp();
//         const expireTime = new Date(Date.now() + 60 * 60 * 1000); // 1hr

//         const newUser = new UserModel({
//             name,
//             email,
//             password: hashPassword,
//             verify_email: false,
//             verify_email_otp: otp,
//             verify_email_expiry: expireTime
//         });

//         const savedUser = await newUser.save();

//         await sendEmail({
//             sendTo: email,
//             subject: "Verify Your Email - GrocyGo",
//             html: verifyEmailTemplate({
//                 name,
//                 otp: otp
//             })
//         });

//         return response.status(201).json({
//             message: "User registered successfully. Check your email to verify your account.",
//             error: false,
//             success: true
//         });

//     } catch (error) {
//         return response.status(500).json({
//             message: "Internal Server Error",
//             error: true,
//             success: false
//         });
//     }
// }
// export async function verifyEmailController(request, response) {
//     try {
//         const { email , otp }  = request.body

//         if(!email || !otp){
//             return response.status(400).json({
//                 message : "Provide required field email, otp.",
//                 error : true,
//                 success : false
//             })
//         }

//         const user = await UserModel.findOne({ email })

//         if(!user){
//             return response.status(400).json({
//                 message : "Email not available",
//                 error : true,
//                 success : false
//             })
//         }

//         const currentTime = new Date().toISOString()

//         if(user.forgot_password_expiry < currentTime  ){
//             return response.status(400).json({
//                 message : "Otp is expired",
//                 error : true,
//                 success : false
//             })
//         }

//         if(otp !== user.forgot_password_otp){
//             return response.status(400).json({
//                 message : "Invalid otp",
//                 error : true,
//                 success : false
//             })
//         }

//         //if otp is not expired
//         //otp === user.forgot_password_otp

//         const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
//             forgot_password_otp : "",
//             forgot_password_expiry : ""
//         })
        
//         return response.json({
//             message : "Verify otp successfully",
//             error : false,
//             success : true
//         })

//     } catch (error) {
//         return response.status(500).json({
//             message : error.message || error,
//             error : true,
//             success : false
//         })
//     }
    // try {
    //     const { code } = request.body;

    //     if (!code) {
    //         return response.status(400).json({
    //             message: "Verification code is required.",
    //             error: true,
    //             success: false
    //         });
    //     }

    //     // ✅ Find user by verification code
    //     const user = await UserModel.findById(code);
    //     if (!user) {
    //         return response.status(400).json({
    //             message: "Invalid verification code.",
    //             error: true,
    //             success: false
    //         });
    //     }

    //     // ✅ Check if already verified
    //     if (user.verify_email) {
    //         return response.json({
    //             message: "Email is already verified.",
    //             success: true,
    //             error: false
    //         });
    //     }

    //     // ✅ Update user to set `verify_email: true`
    //     await UserModel.updateOne({ _id: code }, { verify_email: true });

    //     return response.json({
    //         message: "Email verified successfully!",
    //         success: true,
    //         error: false
    //     });

    // } catch (error) {
    //     console.error("❌ Error in verifyEmailController:", error);
    //     return response.status(500).json({
    //         message: "Internal Server Error",
    //         error: true,
    //         success: false
    //     });
    // }
// }


//login controller
export async function loginController(request,response){
    try {
        const { email , password } = request.body


        if(!email || !password){
            return response.status(400).json({
                message : "provide email, password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "User not register",
                error : true,
                success : false
            })
        }

        if(user.status !== "Active"){
            return response.status(400).json({
                message : "Contact to Admin",
                error : true,
                success : false
            })
        }

        const checkPassword = await bcryptjs.compare(password,user.password)

        if(!checkPassword){
            return response.status(400).json({
                message : "Check your password",
                error : true,
                success : false
            })
        }

        const accesstoken = await generatedAccessToken(user._id)
        const refreshToken = await genertedRefreshToken(user._id)

        const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
            last_login_date : new Date()
        })

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }
        response.cookie('accessToken',accesstoken,cookiesOption)
        response.cookie('refreshToken',refreshToken,cookiesOption)

        return response.json({
            message : `Welcome, ${user.name} 👋`,
            error : false,
            success : true,
            data : {
                accesstoken,
                refreshToken
            }
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//logout controller
export async function logoutController(request,response){
    try {
        const userid = request.userId //middleware

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.clearCookie("accessToken",cookiesOption)
        response.clearCookie("refreshToken",cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return response.json({
            message : "Logout successfully 😔",
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//upload user avatar
export async  function uploadAvatar(request,response){
    try {
        const userId = request.userId // auth middlware
        const image = request.file  // multer middleware

        const upload = await uploadImageClodinary(image)
        
        const updateUser = await UserModel.findByIdAndUpdate(userId,{
            avatar : upload.url
        })

        return response.json({
            message : "upload profile 👍",
            success : true,
            error : false,
            data : {
                _id : userId,
                avatar : upload.url
            }
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//update user details
export async function updateUserDetails(request,response){
    try {
        const userId = request.userId //auth middleware
        const { name, email, mobile, password } = request.body 

        let hashPassword = ""

        if(password){
            const salt = await bcryptjs.genSalt(10)
            hashPassword = await bcryptjs.hash(password,salt)
        }

        const updateUser = await UserModel.updateOne({ _id : userId},{
            ...(name && { name : name }),
            ...(email && { email : email }),
            ...(mobile && { mobile : mobile }),
            ...(password && { password : hashPassword })
        })

        return response.json({
            message : "Updated successfully 👍",
            error : false,
            success : true,
            data : updateUser
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//forgot password not login
export async function forgotPasswordController(request,response) {
    try {
        const { email } = request.body 

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email not available",
                error : true,
                success : false
            })
        }

        const otp = generatedOtp()
        const expireTime = new Date() + 60 * 60 * 1000 // 1hr

        const update = await UserModel.findByIdAndUpdate(user._id,{
            forgot_password_otp : otp,
            forgot_password_expiry : new Date(expireTime).toISOString()
        })

        await sendEmail({
            sendTo : email,
            subject : "Forgot password from GrocyGo",
            html : forgotPasswordTemplate({
                name : user.name,
                otp : otp
            })
        })

        return response.json({
            message : "check your email",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//verify forgot password otp
export async function verifyForgotPasswordOtp(request,response){
    try {
        const { email , otp }  = request.body

        if(!email || !otp){
            return response.status(400).json({
                message : "Provide required field email, otp.",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email not available",
                error : true,
                success : false
            })
        }

        const currentTime = new Date().toISOString()

        if(user.forgot_password_expiry < currentTime  ){
            return response.status(400).json({
                message : "Otp is expired",
                error : true,
                success : false
            })
        }

        if(otp !== user.forgot_password_otp){
            return response.status(400).json({
                message : "Invalid otp",
                error : true,
                success : false
            })
        }

        //if otp is not expired
        //otp === user.forgot_password_otp

        const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
            forgot_password_otp : "",
            forgot_password_expiry : ""
        })
        
        return response.json({
            message : "Verify otp successfully",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//reset the password
export async function resetpassword(request,response){
    try {
        const { email , newPassword, confirmPassword } = request.body 

        if(!email || !newPassword || !confirmPassword){
            return response.status(400).json({
                message : "provide required fields email, newPassword, confirmPassword"
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "Email is not available",
                error : true,
                success : false
            })
        }

        if(newPassword !== confirmPassword){
            return response.status(400).json({
                message : "newPassword and confirmPassword must be same.",
                error : true,
                success : false,
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(newPassword,salt)

        const update = await UserModel.findOneAndUpdate(user._id,{
            password : hashPassword
        })

        return response.json({
            message : "Password updated successfully 👍",
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


//refresh token controler
export async function refreshToken(request,response){
    try {
        const refreshToken = request.cookies.refreshToken || request?.headers?.authorization?.split(" ")[1]  /// [ Bearer token]

        if(!refreshToken){
            return response.status(401).json({
                message : "Invalid token",
                error  : true,
                success : false
            })
        }

        const verifyToken = await jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH_TOKEN)

        if(!verifyToken){
            return response.status(401).json({
                message : "token is expired",
                error : true,
                success : false
            })
        }

        const userId = verifyToken?._id

        const newAccessToken = await generatedAccessToken(userId)

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.cookie('accessToken',newAccessToken,cookiesOption)

        return response.json({
            message : "New Access token generated",
            error : false,
            success : true,
            data : {
                accessToken : newAccessToken
            }
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//get login user details
export async function userDetails(request,response){
    try {
        const userId  = request.userId

        console.log(userId)

        const user = await UserModel.findById(userId).select('-password -refresh_token')

        return response.json({
            message : 'user details',
            data : user,
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : "Something is wrong",
            error : true,
            success : false
        })
    }
}