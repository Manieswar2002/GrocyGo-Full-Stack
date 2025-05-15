import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';

const OtpVerify = () => {
    const [data, setData] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
        if (!location?.state?.email) {
            navigate("/register");
        }
    }, [location, navigate]);

    const isOtpComplete = data.every(el => el);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('/api/user/verify-email-otp', {
                otp: data.join(""),
                email: location?.state?.email
            });

            toast.success(response.data.message);
            navigate("/login");

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Verification failed.');
        }
    };

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p className='font-semibold text-lg'>Enter OTP</p>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='otp'>Enter Your OTP :</label>
                        <div className='flex items-center gap-2 justify-between mt-3'>
                            {
                                data.map((_, index) => (
                                    <input
                                        key={index}
                                        type='text'
                                        maxLength={1}
                                        value={data[index]}
                                        ref={(ref) => inputRef.current[index] = ref}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            const newData = [...data];
                                            newData[index] = value;
                                            setData(newData);

                                            if (value && index < 5) {
                                                inputRef.current[index + 1].focus();
                                            }
                                        }}
                                        className='bg-blue-50 w-full max-w-16 p-2 border rounded outline-none text-center font-semibold'
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <button disabled={!isOtpComplete} className={` ${isOtpComplete ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}>
                        Verify OTP
                    </button>
                </form>
            </div>
        </section>
    );
};

export default OtpVerify;
