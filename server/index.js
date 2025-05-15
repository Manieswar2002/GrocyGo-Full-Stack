// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// dotenv.config()
// import cookieParser from 'cookie-parser'
// import morgan from 'morgan'
// import helmet from 'helmet'
// import session from "express-session"
// import connectDB from './config/connectDB.js'
// import userRouter from './route/user.route.js'
// import categoryRouter from './route/category.route.js'
// import uploadRouter from './route/upload.router.js'
// import subCategoryRouter from './route/subCategory.route.js'
// import productRouter from './route/product.route.js'
// import cartRouter from './route/cart.route.js'
// import passport from "passport";
// import addressRouter from './route/address.route.js'
// import orderRouter from './route/order.route.js'
// import { authMiddleware } from './middlewate/authMiddleware.js'


// // const app = express()
// // app.use(cors({
// //     credentials : true,
// //     origin : process.env.FRONTEND_URL
    
// // }))


// const allowedOrigins = [
//   'https://grocy-go-full-stack-19kx.vercel.app',
//   'https://grocy-go-full-stack-h9qw.vercel.app'
// ];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });



// app.use(express.json())
// app.use(cookieParser())
// app.use(morgan())
// app.use(helmet({
//     crossOriginResourcePolicy : false
// }))

// const PORT = 8080 

// app.get("/",(request,response)=>{
//     response.json({
//         message : "Server is running " + PORT
//     })
// })

// app.use(session({
//     secret: process.env.SESSION_SECRET || "f2b1e5d1c8a75a0c3b9c22f8e6d9f4a5b8e1c2d3f4a5b6c7d8e9f0a1b2c3d4e5",
//     resave: false,
//     saveUninitialized: true
//   }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/api/user',userRouter)
// app.use("/api/category",categoryRouter)
// app.use("/api/file",uploadRouter)
// app.use("/api/subcategory",subCategoryRouter)
// app.use("/api/product",productRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/address",addressRouter)
// app.use('/api/order',orderRouter)
// app.use('api/auth',authMiddleware)

// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("Server is running",PORT)
//         // console.log("Frontend URL:", process.env.FRONTEND_URL);

//     })
// })

























import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import session from "express-session"
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js'
import uploadRouter from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'
import cartRouter from './route/cart.route.js'
import passport from "passport";
import addressRouter from './route/address.route.js'
import orderRouter from './route/order.route.js'
import { authMiddleware } from './middlewate/authMiddleware.js'

const app = express(); // ✅ You missed this line

// ✅ CORS setup
const allowedOrigins = [
  'https://grocy-go-full-stack-19kx.vercel.app',
  'https://grocy-go-full-stack-h9qw.vercel.app'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // for cookies
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// ✅ Other middlewares
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
    crossOriginResourcePolicy : false
}))

// ✅ Health check route
const PORT = 8080 
app.get("/",(req,res)=>{
    res.json({ message : "Server is running on port " + PORT });
})

// ✅ Session and Passport
app.use(session({
    secret: process.env.SESSION_SECRET || "fallback-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if you're using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)
app.use('/api/file', uploadRouter)
app.use('/api/subcategory', subCategoryRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)
app.use('/api/auth', authMiddleware) // 🔄 added a missing `/` before 'api'

// ✅ Connect to DB and start server
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server is running on port", PORT)
        // console.log("Frontend URL:", process.env.FRONTEND_URL);
    })
})

