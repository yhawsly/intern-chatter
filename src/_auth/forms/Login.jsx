import React from "react";
import Button from "./LoginComponents/Button";
import Textinput from "./LoginComponents/Inputtext";
import Inputpassword from "./LoginComponents/Passwordinput";
import ShowPassword from "./LoginComponents/Showpassword";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Email from "./LoginComponents/Emailinput";
import Home from "../../_root/pages/Home";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaKey } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate();

  // Array of user data
  const users = [
    { name: 'Theo', email: 'theo@gmail.com', password: 'theo123' },
    { name: 'Sam', email: 'sam@gmail.com', password: 'sam123' },
    {name: 'Joe', email:'joe@gmail.com', password:'joe123'}
    // Add more users as needed
  ];

  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any user
    const foundUser = users.find(
      (user) => user.name === name || user.email === email && user.password === password
    );

    if (foundUser) {
      // Navigate to the home page if the user is found
      navigate('/profile-page');
    } else {
      // Alert if user not found
      alert('User not found');
    }
  };

    return ( 
  <div className="f bg-white flex justify-center items-center h-screen lg:flex ">
            
      <div className="bg-white h-[80%] w-[90%] object-contain  flex flex-col items-center lg:w-[50%] lg:h-full lg:flex lg:flex-col ">
        {/* <h1 className="ml-[45%] font-bold text-2xl sm:ml-[35%] md:ml-[40%] xl:text-5xl xl:ml-[35%] xl:mb-[10%] md:text-3xl md:mb-[2%] sm:mt-[5%]">LOGIN</h1> */}
        <img src="src/images/favicon.png" alt="" className="mt-20 w-48 h-20 lg:mt-24" />
        <h1 className="text-base text-[#0A31BC] font-bold mt-2">Log into your account</h1>
        <form onSubmit={handleSubmit}>

        
        {/* Username input */}

        {/* Email input */}
        <div className="mb-[5%] mt-2 sm:mb-[5%]">
          <label htmlFor="#" className="xl:text-2xl md:text-xl sm:text-lg">
            Email
          </label>
          {/* <Email /> */}
          <HiOutlineMail className="absolute mt-2 ml-2 text-lg"/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>

        </div>

        {/* Password input */}
        <div className="mb-[5%] sm:mb-[5%]">
          <label htmlFor="#" className="xl:text-2xl md:text-xl sm:text-lg">
            Password
          </label>
          {/* <Inputpassword /> */}
          <FaKey className="absolute mt-2 ml-2 text-lg" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>

          <div>
            <ShowPassword />
          </div>
        </div>

        

        <div>
        {/* <Button /> */}
                {/* Replace the '/home' with where the user can see his/her posts and followers and likes and post stuff */}

         <button type="submit" className="bg-[#0A31BC] tracking-widest text-white py-[2%] px-[1%] rounded-xl w-[60%] md:w-[70%] md:ml-[15%] ml-[20%]">Submit</button>
        <p className="text-center mt-2"> Don't have an account?</p>
        </div>

          <div className="">
     
           
          
          <div className="flex">
            <Link to="/register" className=" text-[#0A31BC] m-auto">
              Sign up
            </Link>
          </div>
        </div>
        </form>
      </div>
      {/* picture Side */}
      <div className="hidden sm:bg-[#0A31BC] lg:block lg:w-[50%] lg:h-full">
        <img src="/src/images/back.jpg" className="lg:h-full lg:relative "></img>
        <p className="text-white text-[50px] font-bold lg:absolute lg:top-48 lg:right-60">Stay Informed <br></br>with latest new <br></br> Stories and <br></br>Discover more</p>
      </div>
    </div>
     );
}
 
export default Login;