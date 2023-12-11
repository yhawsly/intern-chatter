import React from 'react'


const Profileviewer = () => {
  return (
  //  <div className="backdrop-blur-[2px] bg-black/83 w-full h-[982px]">
    <div className='w-screen h-screen'>
    <h1 className='text-4xl font-bold p-10 text-[#0A31BC]'>Viewers</h1>
    <div className='bg-white h-[20%] w-[40%] shadow-lg flex rounded'>
      <div className='h-12 w-12 rounded-full bg-slate-500'>
      <img
            className=" rounded-full"
            src="src/images/pic7.png"
            alt=""
          />
      </div>
      <div className=' w-[90%] h-[80%]'>
        <h2 className=' pl-4 pt-4 pb-2 text-2xl font-bold'>Larry Leon Lingston</h2>
        <p className='pl-4'>
            Passionate news navigator with 10 years in journalism. I uncover stories
              that transcend headlines, offering a front-row seat to the theater of
              life. 
        </p>
        <p className='text-sm text-slate-600'>
          Following
        </p>
      
      </div>
    </div>
        {/* <div
  id="ViewlistRoot"
  className="overflow-hidden bg-white flex flex-col gap-0 w-full items-start rounded-br-lg rounded-bl-lg"
>
  <div className="bg-[rgba(0,_154,_157,_0.82)] flex flex-row justify-between w-full items-start mt-0 ml-px mr-0 pt-1 pl-2 pr-8 rounded-tl rounded-tr">
    <div className="flex flex-row gap-2 w-1/5 items-start mt-px mb-1">
      <div
        id="Ellipse"
        className="bg-[url(https://file.rendit.io/n/1MWgXaoDNGDqzY9y9UXk.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-20 items-start pt-1 px-1"
      >
        <div
          id="Ellipse1"
          className="bg-[url(https://file.rendit.io/n/cBX2laGkDkuZf7p71sIM.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mb-2 w-16 items-start pt-1 px-1"
        >
          <div
            id="Ellipse2"
            className="bg-[url(https://file.rendit.io/n/WllSGAHzXwP2ECTe7fB4.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row mb-2 w-12 items-start pt-1 px-1"
          >
            <div
              id="Ellipse3"
              className="bg-[url(https://file.rendit.io/n/UEX7cHrX0485rL4plckF.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row mb-1 w-12 items-start pt-px px-px"
            >
              <img
                src="https://file.rendit.io/n/ei7sbMIATND1jf1RCPfr.png"
                alt="Profit14"
                id="Profit14"
                className="w-10 h-10 absolute top-px left-px"
              />
              <img
                src="https://file.rendit.io/n/Ty5pPJGK0UkC6NJAcxg8.png"
                alt="Profit15"
                id="Profit15"
                className="relative w-10 mt-0 mb-px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-['Poppins'] font-bold text-white mt-5">
        ViewList
      </div>
    </div>
    <div
      id="Back1"
      className="bg-[#056c80] flex flex-row justify-center mt-5 pt-3 gap-2 w-20 h-10 items-start rounded"
    >
      <img
        src="https://file.rendit.io/n/7N13R0tAkx4RjphF2DIH.svg"
        alt="IconNavArrowLeft"
        id="IconNavArrowLeft"
        className="mt-px w-2"
      />
      <div>
        <button  className="text-xs font-['Lexend_Giga'] font-medium text-white text-center text-justify">
          Back
          </button>
      </div>
    </div>
  </div>
  <div className="relative flex flex-row w-full items-start">
    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] w-full h-[607px] overflow-hidden absolute top-16 left-2 flex flex-col gap-3 items-start px-px">
      <div className="bg-[#45b0be] flex flex-row ml-0 gap-32 w-full h-20 items-start pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/rNtRr1oYC0dWmXc20ceU.png"
              alt="Profit"
              id="Profit"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit1"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row mb-0 gap-32 w-full h-20 items-start pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit2"
              id="Profit2"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit3"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row mb-0 gap-32 w-full h-20 items-start pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit4"
              id="Profit4"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit5"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row mb-0 gap-32 w-full h-20 items-start pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit6"
              id="Profit6"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit7"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row gap-32 w-full h-20 items-start mb-0 ml-px pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit8"
              id="Profit8"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit9"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row gap-32 w-full h-20 items-start mb-0 ml-px pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit10"
              id="Profit10"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit11"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
      <div className="bg-[#45b0be] flex flex-row gap-32 w-full h-20 items-start mb-[-10.65px] ml-px pt-5 pl-4 pr-3 rounded-lg">
        <div className="flex flex-row justify-between mr-0 w-1/3 items-start">
          <div className="flex flex-row gap-8 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/mheOAyqhw0SFPNKD6Sr5.png"
              alt="Profit12"
              id="Profit12"
              className="w-10"
            />
            <div className="text-base font-['Inter'] font-semibold text-white mt-2">
              Rayven04#
            </div>
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white mt-2">
            TerryAmenayh
          </div>
        </div>
        <div className="flex flex-row mt-2 gap-16 w-1/3 items-start">
          <div className="text-base font-['Inter'] font-semibold text-white mt-px">
            Terryamenyah@gmail.com
          </div>
          <div className="text-base font-['Inter'] font-semibold text-white">
            2 weeks age
          </div>
        </div>
        <div
          id="Profit13"
          className="text-sm font-['Lato'] font-bold text-white bg-[#1b8c8f] flex flex-row justify-center mt-px pt-3 w-24 h-10 items-start rounded-lg"
        >
          View <span className="font-['Inter']">Profile</span>
        </div>
      </div>
    </div>
    <div className="bg-white relative flex flex-row justify-between mb-[607px] w-full h-16 items-start pt-3 pl-24 pr-64">
      <div className="flex flex-row justify-between mt-3 w-2/3 items-start">
        <div className="flex flex-row gap-20 w-3/5 items-start">
          <div className="text-xl font-sans font-semibold mb-1">USERNAME</div>
          <div className="text-xl font-sans font-semibold mt-1">
            DISPLAY NAME
          </div>
        </div>
        <div id="EMAIL1" className="text-xl font-sans font-semibold mt-0">
          E<span className="font-['Lato']">-MAIL</span>
        </div>
      </div>
      <div className="text-xl font-sans font-semibold mt-2">TIME VEIWED</div>
    </div>
  </div>
</div>
 */}

   </div>
  //  </div>
  )
}

export default Profileviewer