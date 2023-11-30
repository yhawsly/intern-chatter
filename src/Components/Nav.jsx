import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";


const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav style={{ backgroundColor: "#009A9D" }}>
      <div className="flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold flex items-center">
            <img
              src="src/img/logo.png"
              alt="#"
              style={{ marginRight: "8px", width: "100px", height: "40px" }}
            />
            <span>{}</span>
          </span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[16px]">
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="Home"
                  className="hover:text-fuchsia-600 transition cursor-pointer font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="Explore"
                  className="hover:text-fuchsia-600 transition cursor-pointer font-bold"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  to="About"
                  className="hover:text-fuchsia-600 transition cursor-pointer font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} to="Login/SignUp">
                  <div className="flex items-center 1">
                    <span className="hover:text-fuchsia-600 transition cursor-pointer  ">
                      Login/SignUp
                    </span>
                    {/* /<span className="hover:text-fuchsia-600 transition cursor-pointer"> */}
                     {/* <RiAccountCircleFill className="ml-5 " /> */}
                    {/* </span> */}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            click ? "flex" : "hidden"
          } items-center justify-center absolute top-16 w-full left-0 right-0 bg-slate-900`}
          style={{ backgroundColor: "#009A9D" }}
        >
          {click && (
            <ul className="text-center text-x1 p-20">
              <li className="mb-4">
                <div className="flex items-center">
                  <span className="hover:text-fuchsia-600 transition cursor-pointer ml-2 font-bold">
                    {click ? <FaHome /> : <FaHome />}
                  </span>
                  <Link
                    spy={true}
                    smooth={true}
                    to="Home"
                    className="hover:text-fuchsia-600 transition cursor-pointer ml-2 font-bold"
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center">
                  <span className="hover:text-fuchsia-600 transition cursor-pointer ml-2 font-bold">
                    {click ? (
                      <MdOutlineTravelExplore />
                    ) : (
                      <MdOutlineTravelExplore />
                    )}
                  </span>
                  <Link
                    spy={true}
                    smooth={true}
                    to=" Explore"
                    className="hover:text-fuchsia-600 transition cursor-pointer ml-2 font-bold"
                  >
                    Explore
                  </Link>
                </div>
              </li>
              <li className="mb-4">
              
                <Link
                  spy={true}
                  smooth={true}
                  to="About"
                  className="hover:text-fuchsia-600 transition cursor-pointer font-bold"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  spy={true}
                  smooth={true}
                  to="Login/SignUp"
                  className="hover:text-fuchsia-600 transition cursor-pointer font-bold"
                >
                  Login/SignUp
                </Link>
              </li>
            </ul>
          )}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
