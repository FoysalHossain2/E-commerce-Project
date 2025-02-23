// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/FirebaseConfig';
import { ErrorMessage, SuccessMessage, checkEmail } from '../../../Utils/Utils';



const LoginComponent = () => {


  // const auth = getAuth();
  const navigate = useNavigate()

  const [UserInLogin, setUserInLogin] = useState({
    email: "",
    password: "",
  })


  // HandleLoginInput onChange functionality
  const HandleLoginInput = (e) => {
    setUserInLogin({
      ...UserInLogin,
      [e.target.id]: e.target.value
    })
  }


  // HandleLogin functionality
  const HandleLogin = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);
      console.log("User Resister successfully!");
      
    } catch (error) {
      console.log(error.message);
      
    }
  }









  return (
    <>
    <div className='pt-[100px] pb-[120px]'>
        <div className='container mx-auto flex items-end justify-center'>


            <div className='border   '>
                <form class="max-w-sm mx-auto px-4 py-8" onSubmit={HandleLogin}>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input 
                        type="email" 
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                        placeholder="name@flowbite.com" 
                        required 
                        onChange={HandleLoginInput}
                    />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                        type="password"
                        id="password"
                        minLength={6} 
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required 
                        onChange={HandleLoginInput} 
                    />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                    <button  type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                        LOGIN
                    </button>

                    <p className='text-center py-4'>or Login With</p> 

                    <button type="submit" class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                        Login With Google
                    </button>
                </form>
            </div>

            </div>
    </div>
    </>
  )
}

export default LoginComponent