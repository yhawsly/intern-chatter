import Button from "./LoginComponents/Button";
import Email from "./LoginComponents/Emailinput";
import Textinput from "./LoginComponents/Inputtext";
import Inputpassword from "./LoginComponents/Passwordinput";
import ShowPassword from "./LoginComponents/Showpassword";
import SignButton from "./LoginComponents/SignupButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";


const Register = () => {
    return ( 
        <div className="flex items-cente justify-center h-screen md:mt-[5%]">
      <div className="bg-white h-fit w-[50%] object-contain shadow-[0_0_10px_1px_gray] rounded-2xl pl-[5%] pr-[5%] pt-[3%] md:h-full">
        <h1 className="ml-[45%] text-2xl font-bold mb-[1%] sm:ml-[20%] md:ml-[40%] xl:text-5xl xl:ml-[35%] xl:mb-[10%] md:text-3xl md:mb-[2%] sm:mt-[1%]">Register</h1>

        {/* Username input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Username
          </label>
          <FaUser className="absolute mt-[0.8%] ml-[1%] text-lg"/>
          <Textinput/>
        </div>

        {/* Email input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Email
          </label>
          <HiOutlineMail className="absolute mt-[0.8%] ml-[1%] text-lg"/>
          <Email />
        </div>

        {/* Telephone input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Telephone
          </label>
          
            <FaPhone className="absolute mt-[0.8%] ml-[1%] text-lg" />
          <Textinput/>
        </div>

        {/* Password input */}
        <div className="mb-[3%]">
          <label htmlFor="">
            Password
          </label>
          <FaKey className="absolute mt-[0.8%] ml-[1%] text-lg" />
          <Inputpassword />
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
          <Inputpassword />
          </div>

        <div>
        <SignButton />
        </div>

        <div className="justify-center ml-[35%] mt-[1%] text-sm">
          <div>
            Already have an account?
          </div>
          <div>
            <Link to="/login" className="text-[#056C80] ml-[15%]">
              Login
            </Link>
          </div>
        </div>

      </div>
    </div>
     );
}
 
export default Register;