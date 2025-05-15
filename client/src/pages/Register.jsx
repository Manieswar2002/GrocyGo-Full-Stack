import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";
import { RegisterMessage } from "./TypeAnimation";
import { motion } from "framer-motion";

const CLIENT_ID =
  "471635621970-a6srb3kq9k2n8jqt474bj6ufhn8pls7p.apps.googleusercontent.com";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        else if (value.length < 3)
          error = "Name must be at least 3 characters.";
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Invalid email format.";
        break;

      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!value) error = "Password is required.";
        else if (!passwordRegex.test(value))
          error =
            "Must be at least 6 characters, including uppercase, lowercase, number, and special character.";
        break;

      case "confirmPassword":
        if (!value) error = "Confirm password is required.";
        else if (value !== data.password) error = "Passwords do not match.";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    // Validate the field immediately
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    Object.keys(data).forEach((key) => validateField(key, data[key]));

    if (Object.values(errors).some((err) => err)) {
      toast.error("Please fix validation errors.");
      return;
    }

    setLoading(true);

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
        setLoading(false);
        return;
      }

      toast.success(response.data.message);
      navigate("/otp-verification", { state: { email: data.email } });

      setData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
   
      <section className="w-full container mx-auto px-2">

      <motion.div
          className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7 shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }} // Starts slightly smaller
          animate={{ scale: 1, opacity: 1 }} // Grows to normal size
          exit={{ scale: 1.5, opacity: 0 }} // Expands outward and fades out
          transition={{
            duration: 1, // Medium-speed transition
            ease: "easeInOut", // Smooth acceleration and deceleration
          }}
        >
      
        {/* <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7 shadow-lg"> */}
         <RegisterMessage />

          <form className="grid gap-4 mt-6" onSubmit={handleSubmit}>
            {["name", "email"].map((field) => (
              <div className="grid gap-1" key={field}>
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="bg-blue-50 p-2 border rounded outline-none focus:border-green-400"
                  value={data[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}

            {["password", "confirmPassword"].map((field, idx) => (
              <div className="grid gap-1" key={field}>
                <label htmlFor={field}>
                  {field === "confirmPassword"
                    ? "Confirm Password"
                    : "Password"}
                  :
                </label>
                <div className="bg-blue-50 p-2 border rounded flex items-center focus-within:border-green-400">
                  <input
                    type={
                      (
                        field === "password"
                          ? showPassword
                          : showConfirmPassword
                      )
                        ? "text"
                        : "password"
                    }
                    id={field}
                    name={field}
                    className="w-full outline-none"
                    value={data[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${
                      field === "confirmPassword"
                        ? "confirmation password"
                        : "password"
                    }`}
                  />
                  <div
                    onClick={() =>
                      field === "password"
                        ? setShowPassword(!showPassword)
                        : setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="cursor-pointer"
                  >
                    {(
                      field === "password" ? showPassword : showConfirmPassword
                    ) ? (
                      <FaRegEye />
                    ) : (
                      <FaRegEyeSlash />
                    )}
                  </div>
                </div>
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}
            <button
              disabled={
                Object.values(errors).some((err) => err) ||
                Object.values(data).some((value) => !value.trim()) ||
                loading
              }
              className={`w-full text-white py-2 rounded font-semibold my-3 tracking-wide transition ${
                !Object.values(errors).some((err) => err) &&
                !Object.values(data).some((value) => !value.trim()) &&
                !loading
                  ? "bg-green-800 hover:bg-green-600"
                  : "bg-gray-500"
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          

          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-green-700 hover:text-green-800"
            >
              Login
            </Link>
          </p>
        {/* </div> */}
        </motion.div>
      </section>
 
  );
};

export default Register;






// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import toast from "react-hot-toast";
// import Axios from "../utils/Axios";
// import SummaryApi from "../common/SummaryApi";
// import AxiosToastError from "../utils/AxiosToastError";
// import { RegisterMessage } from "./TypeAnimation";

// const CLIENT_ID = "471635621970-a6srb3kq9k2n8jqt474bj6ufhn8pls7p.apps.googleusercontent.com";

// const Register = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await Axios({
//         ...SummaryApi.register,
//         data: data,
//       });

//       if (response.data.error) {
//         toast.error(response.data.message);
//         setLoading(false);
//         return;
//       }

//       toast.success(response.data.message);
//       navigate("/otp-verification", { state: { email: data.email } });
//     } catch (error) {
//       AxiosToastError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <section className="w-full container mx-auto px-2">
//         <motion.div
//           className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7 shadow-lg"
//           initial={{ scale: 0.5, opacity: 0 }} // Starts slightly smaller
//           animate={{ scale: 1, opacity: 1 }} // Grows to normal size
//           exit={{ scale: 1.5, opacity: 0 }} // Expands outward and fades out
//           transition={{
//             duration: 1, // Medium-speed transition
//             ease: "easeInOut", // Smooth acceleration and deceleration
//           }}
//         >
//           <RegisterMessage />

//           <form className="grid gap-4 mt-6" onSubmit={handleSubmit}>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-2 rounded font-semibold my-3 tracking-wide transition ${
//                 !loading ? "bg-green-800 hover:bg-green-600" : "bg-gray-500"
//               }`}
//             >
//               {loading ? "Registering..." : "Register"}
//             </button>
//           </form>

//           <div className="my-4 text-center">
//             <GoogleLogin
//               onSuccess={(res) => toast.success("Google login successful!")}
//               onError={() => toast.error("Google Login Failed")}
//             />
//           </div>

//           <p className="text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="font-semibold text-green-700 hover:text-green-800">
//               Login
//             </Link>
//           </p>
//         </motion.div>
//       </section>
//     </GoogleOAuthProvider>
//   );
// };

// export default Register;
