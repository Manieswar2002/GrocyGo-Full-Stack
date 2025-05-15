// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Success = () => {
//   const location = useLocation()
    
//     console.log("location",)  
//   return (
//     <div className='m-2 w-full max-w-md bg-green-200 p-4 py-5 rounded mx-auto flex flex-col justify-center items-center gap-5'>
//         <p className='text-green-800 font-bold text-lg text-center'>{Boolean(location?.state?.text) ? location?.state?.text : "Payment" } Successfully</p>
//         <Link to="/" className="border border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-all px-4 py-1">Go To Home</Link>
//     </div>
//   )
// }

// export default Success



import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Success = () => {
  const location = useLocation()
  const successMessage = location?.state?.text || "Payment"

  return (
    <div className='m-4 w-full max-w-md bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg shadow-md mx-auto flex flex-col justify-center items-center gap-4'>
      <CheckCircleIcon className="w-14 h-14 text-green-800" />
      <p className='text-green-900 font-semibold text-lg text-center'>
        {successMessage} Successfully Completed!
      </p>
      <Link to="/" className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition-all">
        Go To Home
      </Link>
    </div>
  )
}

export default Success
