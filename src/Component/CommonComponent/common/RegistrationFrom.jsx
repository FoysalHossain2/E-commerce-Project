import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationFrom = () => {



      // const auth = getAuth();
  const navigate = useNavigate()

  const [UserInLogin, setUserInLogin] = useState({
    email: "",
    password: "",
    Cpassword: ""
  })


  // HandleLoginInput onChange functionality
  const HandleLoginInput = (e) => {
    if (e.target.checked) {
        setUserInLogin({
          ...UserInLogin,
          [e.target.id]: true,
        });
      } else {
        setUserInLogin({
          ...UserInLogin,
          [e.target.id]: e.target.value,
        });
      }
  }


  // HandleLogin functionality
  const HandleLogin =  (e) => {
    e.preventDefault()
   console.log(UserInLogin,"HandleLogin");
   
  }





  return (
    <div >
        <form onSubmit={HandleLogin}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="text" 
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3  rounded-full" 
                placeholder="Enter email" 
                onChange={HandleLoginInput}
             />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input 
                name="password"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3  rounded-full" 
                placeholder="Enter password"
                onChange={HandleLoginInput}
             />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input 
                name="Cpassword" 
                type="password" 
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3  rounded-full" 
                placeholder="Enter confirm password"
                onChange={HandleLoginInput}
             />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600  border-gray-300 rounded" />
              <label for="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a  className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>


                <div class="!mt-8 space-y-4">
                    <button 
                    type="submit"
                    class="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                        Create an account
                    </button>

                    <button type="button"
                        class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#fff" class="inline mr-4" viewBox="0 0 512 512">
                            <path fill="#fbbd00"
                                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                data-original="#fbbd00" />
                            <path fill="#0f9d58"
                                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                data-original="#0f9d58" />
                            <path fill="#31aa52"
                                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                data-original="#31aa52" />
                            <path fill="#3c79e6"
                                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                data-original="#3c79e6" />
                            <path fill="#cf2d48"
                                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                data-original="#cf2d48" />
                            <path fill="#eb4132"
                                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                data-original="#eb4132" />
                        </svg>
                        Continue with Google
                    </button>
                </div>
        </form>
    </div>
  )
}

export default RegistrationFrom