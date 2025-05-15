// import React, { useState } from "react";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
// import toast from "react-hot-toast";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummaryApi";
// import AxiosToastError from "../utils/AxiosToastError";
// import { Link, Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
// import fetchUserDetails from "../utils/fetchUserDetails";
// import { useDispatch } from "react-redux";
// import { setUserDetails } from "../store/userSlice";
// import { GoogleLogin } from "@react-oauth/google";

// const Login = () => {
//     const [data, setData] = useState({
//         email: "",
//         password: "",
//     });

//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({ ...prev, [name]: value }));
//     };

//     const isValid = Object.values(data).every((el) => el.trim() !== "");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await Axios({
//                 ...SummaryApi.login,
//                 data: data,
//             });

//             if (response.data.error) {
//                 toast.error(response.data.message);
//                 return;
//             }

//             if (response.data.success) {
//                 toast.success(response.data.message);
//                 localStorage.setItem(
//                     "accesstoken",
//                     response.data.data.accesstoken
//                 );
//                 localStorage.setItem(
//                     "refreshToken",
//                     response.data.data.refreshToken
//                 );

//                 const userDetails = await fetchUserDetails();
//                 dispatch(setUserDetails(userDetails.data));

//                 setData({ email: "", password: "" });
//                 navigate("/");
//             }
//         } catch (error) {
//             AxiosToastError(error);
//         }
//     };

//     const handleGoogle = () => {
//         window.open("http://localhost:8080/api/auth/google", "_self");
//     };

//     return (
//         <section className="w-full container mx-auto px-2">
//             <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
//             <h2 className="text-green-700 text-2xl font-bold text-center mb-4">Welcome back to GrocyGo..😊</h2>
//                 <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
//                     <div className="grid gap-1">
//                         <label htmlFor="email">Email :</label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-200"
//                             name="email"
//                             value={data.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="grid gap-1">
//                         <label htmlFor="password">Password :</label>
//                         <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 id="password"
//                                 className="w-full outline-none"
//                                 name="password"
//                                 value={data.password}
//                                 onChange={handleChange}
//                                 placeholder="Enter your password"
//                             />
//                             <div
//                                 onClick={() => setShowPassword((prev) => !prev)}
//                                 className="cursor-pointer"
//                             >
//                                 {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
//                             </div>
//                         </div>
//                         <Link
//                             to="/forgot-password"
//                             className="block ml-auto hover:text-primary-200"
//                         >
//                             Forgot password?
//                         </Link>
//                     </div>

//                     <button
//                         disabled={!isValid}
//                         className={`${
//                             isValid
//                                 ? "bg-green-800 hover:bg-green-700"
//                                 : "bg-gray-500"
//                         } text-white py-2 rounded font-semibold my-3 tracking-wide`}
//                     >
//                         Login
//                     </button>
//                 </form>


//                 <button
//                     onClick={handleGoogle}
//                     className="w-full bg-red-500 text-white py-2 rounded font-semibold my-3 tracking-wide hover:bg-red-600"
//                 >
//                     Login with Google
//                 </button>
//                 <p>
//                     Don't have an account?{" "}
//                     <Link
//                         to="/register"
//                         className="font-semibold text-green-700 hover:text-green-800"
//                     >
//                         Register
//                     </Link>
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default Login;



import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
import fetchUserDetails from "../utils/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";
import { WelcomeMessage } from "./TypeAnimation";
import { motion } from "framer-motion";

const CLIENT_ID = "471635621970-a6srb3kq9k2n8jqt474bj6ufhn8pls7p.apps.googleusercontent.com"; // Replace with your actual Google Client ID

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const isValid = Object.values(data).every((el) => el.trim() !== "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios({
                ...SummaryApi.login,
                data: data,
            });

            if (response.data.error) {
                toast.error(response.data.message, {
                    autoClose: 5000, 
                    position: "top-right",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }

            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem("accesstoken", response.data.data.accesstoken);
                localStorage.setItem("refreshToken", response.data.data.refreshToken);

                const userDetails = await fetchUserDetails();
                dispatch(setUserDetails(userDetails.data));

                setData({ email: "", password: "" });
                navigate("/");
            }
        } catch (error) {
            AxiosToastError(error);
        }
    };

    const handleGoogleSuccess = async (response) => {
        try {
            const res = await Axios.post("/api/auth/google", { token: response.credential });

            if (res.data.success) {
                toast.success("Google Login Successful");
                localStorage.setItem("accesstoken", res.data.data.accesstoken);
                localStorage.setItem("refreshToken", res.data.data.refreshToken);

                const userDetails = await fetchUserDetails();
                dispatch(setUserDetails(userDetails.data));

                navigate("/");
            }
        } catch (error) {
            AxiosToastError(error);
        }
    };

    const handleGoogleFailure = () => {
        toast.error("Google Login Failed");
    };

    return (
            <section className="w-full container mx-auto px-2">
            <motion.div 
                    initial={{ rotateY: 180 }} 
                    animate={{ rotateY: 0 }} 
                    transition={{ duration: 0.6 }} 
                    className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7"
                >
                 {/* <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7"> */}
                    <WelcomeMessage />  
                    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                        <div className="grid gap-1">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-blue-50 p-2 border rounded outline-none focus:border-primary-200"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="grid gap-1">
                            <label htmlFor="password">Password :</label>
                            <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full outline-none"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                />
                                <div
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="cursor-pointer"
                                >
                                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </div>
                            </div>
                            <Link to="/forgot-password" className="block ml-auto hover:text-primary-200">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            disabled={!isValid}
                            className={`${
                                isValid ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
                            } text-white py-2 rounded font-semibold my-3 tracking-wide`}
                        >
                            Login
                        </button>
                    </form>
                    <p>
                        Don't have an account?{" "}
                        <Link  to="/register" className="font-semibold text-green-700 hover:text-green-800">
                            Register
                        </Link>
                    </p>
                {/* </div> */}
                </motion.div>
            </section>
    );
};

export default Login;












// import React, { useState } from "react";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
// import toast from "react-hot-toast";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummaryApi";
// import AxiosToastError from "../utils/AxiosToastError";
// import { Link, useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// const CLIENT_ID =
//   "471635621970-a6srb3kq9k2n8jqt474bj6ufhn8pls7p.apps.googleusercontent.com";

// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Validation Function
//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "email":
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!value.trim()) error = "Email is required.";
//         else if (!emailRegex.test(value)) error = "Invalid email format.";
//         break;

//       case "password":
//         const passwordRegex =
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//         if (!value) error = "Password is required.";
//         else if (!passwordRegex.test(value))
//           error =
//             "Must be at least 6 characters, including uppercase, lowercase, number, and special character.";
//         break;

//       default:
//         break;
//     }

//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));

//     // Validate on change
//     validateField(name, value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate fields before submitting
//     Object.keys(data).forEach((key) => validateField(key, data[key]));

//     if (Object.values(errors).some((err) => err)) {
//       toast.error("Please fix validation errors.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await Axios({
//         ...SummaryApi.login,
//         data: data,
//       });

//       if (response.data.error) {
//         toast.error(response.data.message);
//         setLoading(false);
//         return;
//       }

//       toast.success(response.data.message);
//       navigate("/dashboard");

//       setData({ email: "", password: "" });
//     } catch (error) {
//       AxiosToastError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <section className="w-full container mx-auto px-2">
//         <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7 shadow-lg">
//           <h2 className="text-green-700 text-2xl font-bold text-center mb-4">
//             Welcome Back to GrocyGo! 😊
//           </h2>

//           <form className="grid gap-4 mt-6" onSubmit={handleSubmit}>
//             <div className="grid gap-1">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="bg-blue-50 p-2 border rounded outline-none focus:border-green-400"
//                 value={data.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//             </div>

//             <div className="grid gap-1">
//               <label htmlFor="password">Password:</label>
//               <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-green-400">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   className="w-full outline-none"
//                   value={data.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                 />
//                 <div
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="cursor-pointer"
//                 >
//                   {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
//                 </div>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{errors.password}</p>
//               )}
//             </div>

//             <button
//               disabled={
//                 Object.values(errors).some((err) => err) ||
//                 Object.values(data).some((value) => !value.trim()) ||
//                 loading
//               }
//               className={`w-full text-white py-2 rounded font-semibold my-3 tracking-wide transition ${
//                 !Object.values(errors).some((err) => err) &&
//                 !Object.values(data).some((value) => !value.trim()) &&
//                 !loading
//                   ? "bg-green-800 hover:bg-green-600"
//                   : "bg-gray-500"
//               }`}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div className="my-4 text-center">
//             <GoogleLogin
//               onSuccess={(res) => toast.success("Google login successful!")}
//               onError={() => toast.error("Google Login Failed")}
//             />
//           </div>

//           <p className="text-center">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="font-semibold text-green-700 hover:text-green-800"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </section>
//     </GoogleOAuthProvider>
//   );
// };

// export default Login;
