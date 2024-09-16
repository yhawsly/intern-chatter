import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import Register from "../../_auth/forms/Register";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
    <nav style={{ backgroundColor: "#fff" }} className="flex justify-between h-32 w-screen">
      {/* <div className="flex justify-between z-5 lg:py-5 px-20 py-4"> */}
      {/* Icon */}
        <div className="flex items-center flex-1">
            <img
              src="./src/images/favicon.png"
              alt="#"
              style={{ width: "110px", height: "50px" }}
              className="ml-2 sm:ml-12"
            />
        </div>

        {/* <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal"> */}
          <div className="flex items-center mr-4">
            <ul className="flex  text-[16px] sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 hover:text-[#0A31BC]">
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="/home"
                  className=" focus:text-[#0A31BC] active:text-[#0A31BC] hover:text-[#0A31BC] transition cursor-pointer font-bold text-black hidden sm:block md:block lg:block xl:block sm:hover:text-[#0A31BC]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="/explore"
                  className=" focus:text-[#0A31BC] active:text-[#0A31BC] hover:text-[#0A31BC] transition cursor-pointer font-bold text-black hidden sm:block md:block lg:block xl:block sm:hover:text-[#0A31BC]"
                >
                  Explore
                </Link>
              </li>
             
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="/register"
                  className="focus:text-[#0A31BC] active:text-[#0A31BC] hover:text-[#0A31BC] transition cursor-pointer font-bold text-[#0A31BC]  border-2 p-2 border-[#0A31BC] rounded sm:mr-12  "
                >
                SignUp
                </Link>
              </li>
            </ul>
          {/* </div> */}
        </div>

               {/* <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <IoMdMenu />}
        </button> */}
      {/* </div> */}
    </nav>
    <div className="w-screen h-14 bg-[#0a31bc1b] flex justify-between items-center">
    <img src="./src/images/navicon-round.png" className="w-8 h-8 ml-4 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10 "></img>
      <p className="font-bold text-xl  sm:hidden md:hidden lg:hidden xl:hidden">Explore</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block  lg:hover:cursor-pointer">WORLD</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block lg:hover:cursor-pointer">BUSSINESS</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block lg:hover:cursor-pointer">TECHNOLOGY</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block lg:hover:cursor-pointer">ENTERTAINMENT</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block lg:hover:cursor-pointer">SPORTS</p>
      <p className="font-bold text-xl sm:text-lg text-[#0A31BC] hidden sm:hidden md:hidden lg:block xl:block lg:hover:cursor-pointer">TRAVEL</p>
      <img src="./src/images/android-search.png" className="w-8 h-8 mr-4 sm:block md:block lg:mr-10 xl:mr-10 lg:hover:cursor-pointer "></img>
    </div>
    </>
  );
};

export default Nav;
