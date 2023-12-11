import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto w-screen bg-[#00104A] mt-10 pt-20 sm:left">
      <div className="flex sm:flex-col">
        <div className="ml-12">
          <h3 className="font-poppins font-extrabold text-white text-xl">
            Join our news community
          </h3>
          <div className="font-poppins font-normal text-white text-lg ">
            Stay Informed with the Latest News Stories and Discover more
          </div>
        </div>

        <button className="h-10 w-20 my-1 border-2 border-white justify-end items-end mr-10 ml-auto p-2 pl-3 text-white font-inter font-light hover:bg-slate-900">
          Sign up
        </button>
      </div>

      <div className=" h-1 w-screen mt-4 border-b-2 border-white"></div>

      <div className="flex flex-wrap mt-7 space-x-14 justify-evenly">
        <div className="text-white mt-3 sm:ml-6">
          <div className="font-poppins font-bold text-lg">WORLD</div>
          <div className="font-inter font-thin">
            <h4>Africa</h4>
            <h4>America</h4>
            <h4>Asia</h4>
            <h4>Australia</h4>
            <h4>India</h4>
            <h4>China</h4>
            <h4>Europe</h4>
            <h4>Middle East</h4>
          </div>
        </div>
        <div className="text-white ml-12 mt-3">
          <div className="font-poppins font-bold text-lg">BUSINESS</div>
          <div className="font-inter font-thin">
            <h4>Market</h4>
            <h4>Exchange</h4>
            <h4>Imports</h4>
            <h4>Currency</h4>
            <h4>Startups</h4>
          </div>
        </div>
        <div className="text-white ml-12 mt-3">
          <div className="font-poppins font-bold text-lg">ENTERTAINMENT</div>
          <div className="font-inter font-thin">
            <h4>Movies</h4>
            <h4>Celebrities</h4>
            <h4>Music</h4>
            <h4>Televison</h4>
          </div>
        </div>
        <div className="text-white ml-12 mt-3">
          <div className="font-poppins font-bold text-lg">STYLE</div>
          <div className="font-inter font-thin">
            <h4>Lifestyle</h4>
            <h4>Art</h4>
            <h4>Design</h4>
            <h4>Fashion</h4>
            <h4>Beauty</h4>
            <h4>Architecture</h4>
          </div>
        </div>
        <div className="text-white ml-12 mt-3">
          <div className="font-poppins font-bold text-lg">SPORTS</div>
          <div className="font-inter font-thin">
            <h4>Football</h4>
            <h4>Tennis</h4>
            <h4>Golf</h4>
            <h4>Olympics</h4>
            <h4>Hockey</h4>
            <h4>Basketball</h4>
          </div>
        </div>
      </div>

      <div className=" h-1 w-screen mt-4 border-b-2 border-white"></div>

      <div className="flex mt-5  ">
        <div className="w-36 h-36 ml-12">
          <img src="./src/images/image.png" alt="" />
        </div>
        <div className="text-white text-lg  font-poppins mt-9 pl-7">
          <h4>Follow us on </h4>
        </div>
        <div className=" text-white mt-10 pl-2">
          <span>{<FaSquareXTwitter>:</FaSquareXTwitter>}</span>
        </div>
        <div className="text-white mt-10 pl-2">
          <FaFacebook></FaFacebook>
        </div>
        <div className="text-white mt-10 pl-2">
          <FaInstagramSquare></FaInstagramSquare>
        </div>
      </div>
    </div>
  );
};

export default Footer;
