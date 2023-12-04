import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-screen h-16 bg-slate-200 flex justify-center items-center"></div>
      <div className=" mb-3 ml-28">
        <span className=" mt-3 sr-only">Search</span>
        <span className=" inset-y-0 left-0 flex items-center pl-2">
          <svg className=" h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white max-w-2xl border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>

      <div className="h-30 max-w-7xl bg-slate-400 justify-between mt-17 mx-auto rounded-lg items-center flex flex-row">
        <img className="  object-fill" src="src/images/bannerpic.jpeg" alt="" />
        <div className="mr-20 font-poppins font-extrabold text-5xl text-white underline">
          Isreal and Hamas War
          <h3 className="font-inter text-xl ">
            Amid soaring debts, US continues to back Isreal <br /> Isreal raids
            Hospital in Gaza in 'Targeted Operation' <br />
            Isreal begins ground operation in Gaza <br /> Release of some
            Hostages back to Isreal{" "}
          </h3>
        </div>
      </div>

      {/* Categories section */}
      <div className="flex flex-row justify-center ">
        <div className="flex flex-col hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl">
            For You
          </h3>
          <div className="h-44 w-56 bg-slate-400 mx-10 mt-2 rounded-t-lg">
            <img
              className="h-44 w-56 rounded-t-lg"
              src="src/images/nails.jpeg"
              alt=""
            />
          </div>
          <div className="h-16 w-56 rounded-b-lg ml-10 bg-slate-700 flex flex-row">
            <div className="h-12 w-12 ml-3 mt-2 rounded-full bg-slate-200">
              <img
                className="h-12 w-12 rounded-full"
                src="src/images/pic4.png"
                alt=""
              />
            </div>
            <div className="text-white font-inter mt-2 ml-2 text-base">
              <h3>Dangers with UVLight</h3>
              <p className="mt-2 text-sm">5 days ago</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl">
            Following
          </h3>
          <div className="h-44 w-56 bg-slate-400 border mx-10 mt-2 rounded-t-lg">
            <img
              className="rounded-t-xl"
              src="src/images/fashion.jpeg"
              alt=""
            />
          </div>
          <div className="h-16 w-56 rounded-b-lg ml-10 bg-slate-700 flex flex-row">
            <div className="h-12 w-12 ml-3 mt-2 rounded-full bg-slate-200">
              <img
                className="h-12 w-12 object-fill rounded-full"
                src="src/images/p1.png"
                alt=""
              />
            </div>
            <div className="text-white font-inter mt-2 ml-2 text-base">
              <h3>Balenciaga towelskirt</h3>
              <p className="mt-2 text-sm">3 hours ago</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl">
            Sports
          </h3>
          <div className="h-44 w-56 bg-slate-400 mx-10 mt-2 rounded-t-lg">
            <img className="rounded-t-xl" src="src/images/sports.jpeg" alt="" />
          </div>
          <div className="h-16 w-56 rounded-b-lg ml-10 bg-slate-700 flex flex-row">
            <div className="h-12 w-12 ml-3 mt-2 rounded-full bg-slate-200">
              <img
                className="h-12 w-12 rounded-full"
                src="src/images/p2.png"
                alt=""
              />
            </div>
            <div className="text-white font-inter mt-2 ml-2 text-base">
              <h3>Messi wins Ballon'Dor</h3>
              <p className="mt-2 text-sm">1 month ago</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl">
            Top Stories
          </h3>
          <div className="h-44 w-56 bg-slate-400 mx-10 mt-2 rounded-t-lg">
            <img
              className="rounded-t-xl"
              src="src/images/topstory.jpeg"
              alt=""
            />
          </div>
          <div className="h-16 w-56 rounded-b-lg ml-10 bg-slate-700 flex flex-row">
            <div className="h-12 w-12 ml-3 mt-2 rounded-full bg-slate-200">
              <img
                className="h-12 w-12 rounded-full"
                src="src/images/p3.png"
                alt=""
              />
            </div>
            <div className="text-white font-inter mt-2 ml-2 text-base">
              <h3>OBO & Chioma's twins</h3>
              <p className="mt-2 text-sm">2 months ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-1 w-screen mt-14 border-b-2 border-gray-400"></div>

      {/* featured article section */}
      <div className="font-poppins font-extrabold text-xl mt-10 ml-14">
        <h3>Featured Article</h3>
      </div>
      <div className="h-auto max-w-7xl bg-slate-200 rounded-lg py-10 ml-14">
        <div className="flex flex-row">
          <div className=" ml-14 flex flex-row">
            <div className="h-56 w-48 bg-slate-400 rounded-xl ">
              <img
                className=" h-56 object-fill rounded-xl"
                src="src/images/tech.jpeg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  Sam Altman; CEO and{" "}
                </h3>
                <p className="font-extrabold text-lg underline">
                  Open AI Company drama
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>

          <div className=" ml-14 flex flex-row">
            <div className="h-56 w-48 bg-slate-400 rounded-xl">
              <img
                className="h-56 rounded-xl"
                src="src/images/health.jpeg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  Deep Breathing: A Complete Guide{" "}
                </h3>
                <p className="font-extrabold text-lg underline">
                  to the Relaxation technique
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className=" ml-14 flex flex-row">
            <div className="h-56 w-48 bg-slate-400 rounded-xl">
              <img
                className="h-56 w-48 object-fill rounded-xl"
                src="src/images/politics.jpeg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  Former Pharmacy Council{" "}
                </h3>
                <p className="font-extrabold text-lg underline">
                  Registrar wins Amenfi slot
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>

          <div className=" ml-14 flex flex-row">
            <div className="h-56 w-48 bg-slate-400 rounded-xl">
              <img
                className="rounded-xl"
                src="src/images/business.jpeg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  10 Business Tips for{" "}
                </h3>
                <p className="font-extrabold text-lg underline">
                  Women in 2024
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>
          <button className="h-12 w-24 ml-16 mt-56 rounded-lg bg-slate-700 text-white px-2 py-2 hover:bg-slate-800">
            {" "}
            See More
          </button>
        </div>
      </div>

      <div className=" h-1 w-screen mt-10 border-b-2 border-gray-400 justify-center"></div>
      {/* for you article section */}
      <div className="font-poppins font-extrabold text-xl mt-10 ml-14">
        <h3>Just So You Know</h3>
      </div>

      <div className="flex flex-row space-x-52 items-center">
        <div className="flex flex-col">
          <div className=" ml-14 flex flex-row mt-4">
            <div className="h-56 w-48 bg-slate-400 rounded-xl">
              <img
                className="h-56 w-48 rounded-xl "
                src="src/images/religious.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  Marry Multiple Women if you want to
                </h3>
                <p className="font-extrabold text-lg underline">
                  Live Long : Rev Meshak Aboh
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>
          <div className=" ml-14 flex flex-row mt-8">
            <div className="h-56 w-48 bg-slate-400 rounded-xl">
              <img
                className="h-56 w-48 rounded-xl"
                src="src/images/room.jpeg"
                alt=""
              />
            </div>
            <div className="ml-3 mt-5 font-poppins">
              <a href="">
                <h3 className="font-extrabold text-lg underline">
                  Tips on how to get the right{" "}
                </h3>
                <p className="font-extrabold text-lg underline">
                  Asthetic Decor you dream of
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Reiciendis, eligendi dicta doloremquerd</p>
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-72 max-w-xl ml-10 rounded-2xl mt-6 bg-slate-400">
            <img
              className="rounded-xl"
              src="src/images/sidebanner.jpeg"
              alt=""
            />
          </div>
          <div className="ml-10 mt-9 font-poppins">
            <a href="">
              <h3 className="font-extrabold text-lg underline">
                US Muslims pledge to ditch Biden in 2024 over his stance on
                Isreal-Gaza war
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique possimus <br></br> vitae vel? Repellat dolor quos
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* followers section */}

      <div className=" mt-36 justify-center items-center text-center text-2xl font-poppins font-extrabold text">
        <h3>Who to Follow</h3>
      </div>
      <div className="flex flex-row mt-5 space-x-3 justify-center">
        <div className="h-20 w-20 rounded-full bg-slate-400">
          <img
            className="h-20 w-20 rounded-full"
            src="src/images/pic5.png"
            alt=""
          />
        </div>
        <div className="h-20 w-20 rounded-full bg-slate-400">
          <img
            className="h-20 w-20 rounded-full"
            src="src/images/pic6.png"
            alt=""
          />
        </div>
        <div className="h-20 w-20 rounded-full bg-slate-400">
          <img
            className="h-20 w-20 rounded-full"
            src="src/images/pic7.png"
            alt=""
          />
        </div>
        <div className="h-20 w-20 rounded-full bg-slate-400">
          <img
            className="h-20 w-20 rounded-full"
            src="src/images/pic8.png"
            alt=""
          />
        </div>
        <div className="h-20 w-20 rounded-full bg-slate-400">
          <img
            className="h-20 w-20 rounded-full"
            src="src/images/pic9.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
