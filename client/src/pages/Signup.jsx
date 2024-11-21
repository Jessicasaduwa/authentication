import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState ({
        name: "",
        email: "",
        password:"",
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data } = await axios.post("/register", {
                name,
                email,
                password,
            });

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                toast.success("Signup was successful.")
                navigate("/login");
            }
        } catch (error) {}
    };

    console.log(data);



  return (
    <div>
    <body class="bg-[#202227] text-gray-200 font-sans min-h-screen flex items-center justify-center">
    <div class="container md:flex mx-auto p-4 md:items-center md:justify-between md:gap-8 max-w-6xl">
    
     <div class="w-full md:w-1/2 p-8">
        <div class="flex items-center space-x-2 mb-6">
            <div class="bg-blue-500 w-10 h-10 rounded-full"></div>
            <h2>Signup Page</h2>
        </div>
        
        <h1 class="text-3xl font-semibold mb-2">Welcome 👋</h1>
        <p class="text-xs mb-6">We are happy to have you here</p>
        
        <form
         onSubmit={registerUser}
         action="#"
         class="space-y-4 md:max-w-sm">

            <div>
                <label for="" class="block text-xs mb-2">Your fullname*</label>
                <input
                 value={data.name}
                 onChange={(e) => setData({ ...data, name: e.target.value})}
                 type="text"
                 placeholder="Enter your name"
                 class="w-full p-4 rounded bg-[#282a2e] border text-sm text-gray-300 border-gray-600 focus:outline-none focus:border-blue-500" />
            </div>
            
            <div>
                <label for="" class="block text-xs mb-2">Email Address*</label>
                <input
                 value={data.email}
                 onChange={(e) => setData({ ...data, email: e.target.value})}
                 type="email"
                 placeholder="Enter email address"
                 class="w-full p-4 rounded bg-[#282a2e] border text-sm text-gray-300 border-gray-600 focus:outline-none focus:border-blue-500" />
            </div>
            
            <div>
                <label for="" class="block text-xs mb-2" >Create Password*</label>
                <input
                 value={data.password}
                 onChange={(e) => setData({ ...data, password: e.target.value})}
                 type="password"
                 placeholder="Create a password"
                 class="w-full p-4 rounded bg-[#282a2e] border text-sm text-gray-300 border-gray-600 focus:outline-none focus:border-blue-500" />
            </div>
            
            <div class="flex items-center space-x-2">
                <input
                 type="checkbox"
                 class="form-checkbox h-4 w-4 text-[#5871eb] bg-gray-700 border-gray-600"/>
                <label for="" class="text-gray-400 text-xs">I agree to terms & conditions</label>
            </div>
            
            <button class="w-full bg-[#5871eb] py-4 mt-4 text-white text-xs rounded">Register Account</button>
            
            <div class="flex items-center my-4">
                <span class="border-t border-gray-700 flex-grow"></span>
                <span class="mx-6">or</span>
                <span class="border-t border-gray-700 flex-grow"></span>
            </div>

            <button class="w-full bg-black py-5 mt-4 text-white text-xs rounded">
                <img
                 src="/client/images/Google__G__logo.svg.png"
                 alt=""
                 class=""/>
                  Register with Google
            </button>
            <p class="text-xs mb-6">Already have an account?<a href="/login">Login here</a> </p>

        </form>
    </div>

    
     <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <img
         src="original-db52871927fcfd3034f14e3e1041f366.png" 
         alt=""
         class="rounded-lg object-cover w-full h-full" />
     </div>


    
    </div>
</body>
    </div>
  )
}

export default Signup