import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationFrom from '../CommonComponent/common/RegistrationFrom'

const Registration = () => {
  return (
    <div
        className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[white] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">

                <div className="my-8 text-center">
                    <h4 className="text-3xl text-gray-800 font-extrabold">Sing up</h4>
                    <p className="text-sm text-gray-500 mt-4">Create an account with us</p>
                </div>

              {/* from */}
              <RegistrationFrom />

              <hr className="my-8 border-gray-300" />

                <p className="text-sm text-center text-gray-500">Already have an account? 
                <Link to={'/login'} className="text-sm text-blue-600 hover:underline">Login</Link></p>
            
            </div>
        </div>
  )
}

export default Registration