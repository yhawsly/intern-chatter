import React from 'react';
import pic from '../img/pic.jpg';

function Modal({closeModel}) {
  return (

// Background of the permission modal **Darkening the page
    //Inline Tailwind CSS
    <div className='bg-black/40 w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-auto '> 
    {/* main Background  */}
      <div className='  flex justify-center w-screen h-screen'>
        
      <button className= ' cursor-pointer absolute  top-44 right-0 sm:top-48 sm:right-10 md:top-8 md:right-0 lg:top-20 lg:right-72 bg-white  w-12 h-12 rounded-full font-bold ' onClick={() => closeModel(false)} >X</button>
          <div className='m-auto relative bg-white shadow-lg h-52 w-11/12 rounded-3xl sm:w-8/12 md:h-4/5 md:w-10/12 md:rounded-none lg:w-10/12 xl:h-4/6 xl:w-6/12 xl:rounded-none' >
            <h1 className='text-center text-lg font-bold  pt-6 md:pt-14 md:text-4xl xl:pt-15 xl:text-4xl'>Your article is not published yet</h1>
            <p className='text-center text-sm'> Are you sure you want to publish this?</p>
            <p className='text-center pt-1 text-sm font-bold'>Article Info</p>
            <p className='text-center text-xs md:text-lg'>
                Article Title : In a Diaspora<br></br>
                Author : John Doe<br></br>
                Email : example@domain.com<br></br>
                Publishing Date : 28/11/2023
            </p>
            <p className='text-xs pl-2 pt-1 text-blue-500'>Everyone can see this</p>

            <div className='flex  h-36 m-auto '> 
              <div className='hidden md:block md:h-50 md:w-50 left-0 md:bg-black'>
                <img src={pic} className='w-50 h-48 left-0 pic ' ></img>
              </div>
              <div className='relative' >
                <p className='hidden md:block md:text-center md:right-0 md:ml-48 md: text-xl'>Information written <br></br> 
                 in this page should be in <br></br> 
                accordance with the <br></br>
                <span>Terms and Conditions</span></p>
                {/* Publishing button */}
                <button className='bg-blue-500 text-md text-white h-8 w-28 absolute bottom-0 top-10 left-44  rounded-lg md:top-32 md:left-60'>Publish</button>
              </div>

            </div>
          </div>
      </div>
      
  </div>
  )
}

export default Modal