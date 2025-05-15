// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import User from "../models/user.model.js";

// passport.use(new GoogleStrategy(
//     {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "/api/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//         try {
//             console.log("🔹 Google Profile Data:", profile);

//             let user = await UserModel.findOne({ googleId: profile.id });

//             if (!user) {
//                 user = new UserModel({
//                     googleId: profile.id,
//                     name: profile.displayName,
//                     email: profile.emails[0].value,
//                     avatar: profile.photos[0].value,
//                     password: "", // Since Google users won't have passwords
//                 });
//                 await user.save();
//                 console.log("✅ New User Created:", user);
//             } else {
//                 console.log("✅ Existing User Found:", user);
//             }

//             return done(null, user);
//         } catch (err) {
//             console.error("❌ Error in Google Strategy:", err);
//             return done(err, null);
//         }
//     }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await UserModel.findById(id);
//         done(null, user);
//     } catch (err) {
//         done(err, null);
//     }
// });




import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";  // ✅ Import User model

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log("✅ Google Profile Received:", profile);

                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    console.log("🟡 User not found, creating a new user...");

                    user = new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        avatar: profile.photos[0].value,
                        verify_email: true,
                        last_login_date: new Date(),
                    });

                    await user.save();
                    console.log("✅ User Saved in MongoDB:", user);
                } else {
                    console.log("🟢 User already exists:", user);
                }

                return done(null, user);
            } catch (err) {
                console.error("❌ Error in GoogleStrategy:", err);
                return done(err, null);
            }
        }
    )
);
