import Button from "./LoginComponents/Button";
import Email from "./LoginComponents/Emailinput";
import Textinput from "./LoginComponents/Inputtext";
import Inputpassword from "./LoginComponents/Passwordinput";
import ShowPassword from "./LoginComponents/Showpassword";
import SignButton from "./LoginComponents/SignupButton";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";


const Register = () => {
    return ( 
      <div className="f bg-black flex justify-center items-center h-screen lg:flex  ">
        <div className="hidden sm:bg-[#0A31BC] lg:block lg:w-[50%] lg:h-full">
        <img src="/src/images/back.jpg" className="lg:h-full lg:relative "></img>
        <p className="text-white text-[66px] font-bold lg:absolute lg:top-48 lg:left-20">Join Our News <br></br> community <br></br>today!</p>
      </div>

     <div className="bg-white h-[80%] w-[90%] object-contain  flex flex-col items-center lg:w-[50%] lg:h-full lg:flex lg:flex-col ">
        {/* <h1 className="ml-[45%] text-2xl font-bold mb-[1%] sm:ml-[20%] md:ml-[40%] xl:text-5xl xl:ml-[35%] xl:mb-[10%] md:text-3xl md:mb-[2%] sm:mt-[1%]">Register</h1> */}
        <img src="src/images/favicon.png" alt="" className="mt-20 w-48 h-20 lg:mt-24" />
        <h1 className="text-base text-[#0A31BC] font-bold mt-2">Create a new account</h1>


        {/* Username input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Username
          </label>
          <FaUser className="absolute mt-[0.8%] ml-[1%] text-lg"/>
          <input type="text" className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>
        </div>

        {/* Email input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Email
          </label>
          <HiOutlineMail className="absolute mt-[0.8%] ml-[1%] text-lg"/>
          <input type="email" className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>
        </div>

        {/* Password input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Password
          </label>
          <FaKey className="absolute mt-[0.8%] ml-[1%] text-lg" />
          <input type="text" className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>
          <div>
            <ShowPassword />
          </div>
        </div>

         {/* Confirm Password input */}
         <div className="mb-[3%]">
          <label htmlFor="">
           Confirm Password
          </label>
          
            <RiLockPasswordFill className="absolute mt-[0.8%] ml-[1%] text-lg" />
            <input type="text" className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>
          </div>

        <div>
        <SignButton />
            <p className="text-center mt-2"> Already have an account?</p>
            </div>
          <div>
            <Link to="/login" className="text-[#0A31BC] ml-[15%]">
              Login
            </Link>
          </div>
        </div>

      </div>
     );
}
 
export default Register;