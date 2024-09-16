import React from "react";

const Cards = () => {
  return (
    <>
      {/* <div className="w-screen h-16 bg-slate-200 flex justify-center items-center"></div> */}
      {/* <div className=" mb-3 ml-28">
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
      </div> */}
{/* className="h-30 max-w-7xl bg-slate-100 justify-between mt-17 mx-auto rounded-lg flex flex-row " */}
      <div className="w-screen sm:flex " >
            <h2 className="text-center text-3xl font-bold p-4 sm:absolute sm:top-64 sm:right-48  md:absolute md:top-64 md:right-48"> Isreal and Hamas War</h2>
            <img className="object-fill w-screen pl-6 pr-6 sm:relative sm:w-7/12 sm:p-6" src="src/images/bannerpic.jpeg" alt="" />
         
          <h3 className="text-xl m-3 flex items-center ">
            Amid soaring debts, US continues to back Isreal <br /> Isreal raids
            Hospital in Gaza in 'Targeted Operation' <br />
            Isreal begins ground operation in Gaza <br /> Release of some
            Hostages back to Isreal
           
          </h3>
          <button className="bg-[#0A31BC] h-10 w-28 text-base font-bold rounded  text-white hidden sm:hidden sm:block sm:absolute sm:bottom-64 sm:left-3/4  ">Read more</button>
         
        {/* </div> */}
      </div>
      

      {/* Categories section */}
       <div className="grid  sm:grid-cols-2 md:gri lg:grid-cols-4 m-a">
        <div className="flex flex-col hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl  text-[#0A31BC]">
            For You
          </h3>
          <div className="m-auto">
                <div className="h-48 w-56  rounded-t-lg relative">
                  <img
                    className="h-48 w-56 rounded-t-lg"
                    src="src/images/nails.jpeg"
                    alt=""
                  />
                </div>
              <div className="h-16 w-56 rounded-lg relative">
                  <div className="text-black font-inter text-base h-16 w-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                      <h3 className="ml-2 pt-3">Dangers with UVLight</h3>
                      <p className="mt-1 text-sm">5 days ago</p>
                   </div>

                   <div className="h-12 w-12 ml-3 rounded-full absolute bottom-12">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="src/images/pic4.png"
                      alt=""
                    />
                  </div>
                </div>
        </div>
        </div>


        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl  text-[#0A31BC]">
            Following
          </h3>
          <div className="m-auto shadow-lg rounded-lg">
          <div className="h-48 w-56  rounded-t-lg relative">
            <img
              className="rounded-t-xl"
              src="src/images/fashion.jpeg"
              alt=""
            />
          </div>
          <div className="h-16 w-56 rounded-lg relative">
            <div className="text-black font-inter text-base h-16 w-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
              <h3>Balenciaga towelskirt</h3>
              <p className="mt-2 text-sm">3 hours ago</p>
            </div>
            <div className="h-12 w-12 ml-3 rounded-full absolute bottom-12">
              <img
                className=" object-fill rounded-full"
                src="src/images/p1.png"
                alt=""
              />
              </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl  text-[#0A31BC]">
            Sports
          </h3>
          <div className="m-auto shadow-lg rounded-lg">
                <div className="h-48 w-56  rounded-t-lg relative">
                  <img
                    className="h-48 w-56 rounded-t-lg"
                    src="src/images/sports.jpeg"
                    alt=""
                  />
                </div>
              <div className="h-16 w-56 rounded-lg relative">
                  <div className="text-black font-inter text-base h-16 w-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                      <h3 className="ml-2 pt-3">Messi wins Ballon'Dor</h3>
                      <p className="mt-1 text-sm">1 month ago</p>
                   </div>

                   <div className="h-12 w-12 ml-3 rounded-full absolute bottom-12">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="src/images/p2.png"
                      alt=""
                    />
                  </div>
                </div>
        </div>
        </div>
        <div className="flex flex-col  hover:scale-110 duration-700">
          <h3 className="mx-10 mt-10 font-poppins font-extrabold text-xl  text-[#0A31BC]">
            Top Stories
          </h3>
          
          <div className="m-auto shadow-lg rounded-lg">
                <div className="h-48 w-56  rounded-t-lg relative">
                  <img
                    className="h-48 w-56 rounded-t-lg"
                    src="src/images/topstory.jpeg"
                    alt=""
                  />
                </div>
              <div className="h-16 w-56 rounded-lg relative">
                  <div className="text-black font-inter text-base h-16 w-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                      <h3 className="ml-2 pt-3">OBO & Chioma's twins</h3>
                      <p className="mt-1 text-sm"> months ago</p>
                   </div>

                   <div className="h-12 w-12 ml-3 rounded-full absolute bottom-12">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="src/images/p3.png"
                      alt=""
                    />
                  </div>
                </div>
        </div>

          
        </div>
      </div> 
      

      <div className=" h-1 w-screen mt-2 border-2 border-[#0a31bc55]"></div>

      {/* featured article section */}
      <div className=" mt-10 mb-3 ml-14">
        <h3 className="text-[#0A31BC] font-poppins font-extrabold text-xl">Featured Article</h3>
      </div>
      <div className=" h-auto w-80 m-auto sm:w-auto sm:p-10 bg-[#0a31bc1b] rounded-lg grid sm:grid md:grid-cols-2 lg:grid-cols-3">
        {/* <div className=" bg-[#0A31BC]"> */}

          <div className="w-64 m-auto ">
              <img
                className="  object-fill m-auto"
                src="src/images/tech.jpeg"
                alt=""
              />
            
                <h3 className="font-extrabold text-lg m-auto ">
                  Sam Altman; CEO and <br></br>
                  Open AI Company drama
                </h3>
                <p className="mb-2">In her new book, former Rep Liz Cheney paints a scathing portrait of the Republican Party,
                   condemning her former colleagues and party leaders as “enablers and collaborators,”</p>
                   <div className="flex items-center">
                   <a href="#" className="text-[#0A31BC] text-base underline ">Continue reading</a>
                   <img src="src/images/arrow-right-c.png" className="w-7 h-5 ml-1"></img>
                   </div>
                  

          </div>

            <div className="w-64 m-auto ">
              <img
                className="object-fill mt-10"
                src="src/images/health.jpeg"
                alt=""
              />
                <h3 className="font-extrabold text-lg ">
                  Deep Breathing: A Complete Guide{" "}
                  to the Relaxation technique
                </h3>
                <p className="mb-2">In her new book, former Rep Liz Cheney paints a scathing portrait of the Republican Party,
                   condemning her former colleagues and party leaders as “enablers and collaborators,”</p>
                   <div className="flex items-center">
                   <a href="#" className="text-[#0A31BC] text-base underline ">Continue reading</a>
                   <img src="src/images/arrow-right-c.png" className="w-7 h-5 ml-1"></img>
                   </div>
             
          </div>  

          <div className="w-64 m-auto">
              <img
                className="mt-10"
                src="src/images/business.jpeg"
                alt=""
              />
                <h3 className="font-extrabold text-lg">
                  10 Business Tips for <br></br>
                  Women in 2024
                </h3>
                <p className="mb-2">In her new book, former Rep Liz Cheney paints a scathing portrait of the Republican Party,
                   condemning her former colleagues and party leaders as “enablers and collaborators,”</p>
                   <div className="flex items-center">
                   <a href="#" className="text-[#0A31BC] text-base underline ">Continue reading</a>
                   <img src="src/images/arrow-right-c.png" className="w-7 h-5 ml-1"></img>
                   </div>
          </div>
        </div>
          <button className="h-12 w-24 ml-16 mt-7 rounded-lg bg-slate-700 text-white hover:bg-slate-800">
            {" "}
            See More
          </button>
   
       

     
      {/* for you article section */}
      <div className=" mt-16 ml-14">
        <h3 className="text-[#0A31BC] font-extrabold text-2xl">Just So You Know</h3>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col">
          <div className=" ml-8 flex flex-row mt-4">
            <div className="h-56 rounded-xl">
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
           <div className=" ml-8 flex flex-row mt-8">
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
          <div className=" max-w-xl ml-8 rounded-2xl mt-6 bg-slate-400">
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
        <h3 className="text-[#0A31BC]">Who to Follow</h3>
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
