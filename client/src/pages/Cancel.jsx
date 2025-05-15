// import React from 'react'
// import { Link } from 'react-router-dom'

// const Cancel = () => {
//   return (
//     <div className='m-2 w-full max-w-md bg-red-200 p-4 py-5 rounded mx-auto flex flex-col justify-center items-center gap-5'>
//         <p className='text-red-800 font-bold text-lg text-center'>Order Cancel</p>
//         <Link to="/" className="border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-all px-4 py-1">Go To Home</Link>
//     </div>
//   )
// }

// export default Cancel



import React from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/solid'

const Cancel = () => {
  return (
    <div className='m-4 w-full max-w-md bg-gradient-to-r from-red-200 to-red-300 p-6 rounded-lg shadow-md mx-auto flex flex-col justify-center items-center gap-4'>
      <XCircleIcon className="w-14 h-14 text-red-800" />
      <p className='text-red-900 font-semibold text-lg text-center'>Order Cancelled</p>
      <Link to="/" className="bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-800 transition-all">
        Go To Home
      </Link>
    </div>
  )
}

export default Cancel
