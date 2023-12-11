import { useState } from "react";
import React from 'react'
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import mypicture from "/src/images/fav.jpg";
import mypicture2 from "/src/images/mark.jpg";
import mypicture3 from "/src/images/sue.jpg";
import mypicture4 from "/src/images/phid.jpg";
import mypicture5 from "/src/images/rozey.jpg";
import mypicture6 from "/src/images/lola.jpg";


 const followerlist = () => {
    const [count, setCount] = useState(0);

    return (
      <div className='w-screen h-screen'>
      <h1 className='text-4xl font-bold p-10 text-[#0A31BC]'>Followers</h1>
      <div className='bg-white h-[20%] w-[40%] shadow-lg flex rounded'>
        <div className='h-12 w-12 rounded-full bg-slate-500'>
        <img
              className=" rounded-full h-12 w-12"
              src="src/images/pretty_burbon.jpg"
              alt=""
            />
        </div>
        <div className=' w-[90%] h-[80%]'>
          <h2 className=' pl-4 pt-4 pb-2 text-2xl font-bold'>Pretty_bourbon</h2>
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
      </div>

      // <div className="bg-black flex flex-row justify-center w-full">
      //   <div className="bg-white overflow-hidden w-[443px] h-[890px] relative">
      //     <div className="absolute w-[443px] h-[5px] top-[89px] left-0 bg-black ">
      //     </div>
      //     <div className="absolute w-[260px] h-[16px] top-[463px] left-[79px] bg-black rounded-[11px] ">
      //     </div>
  
      //     <div className="absolute w-[443px] h-[54px] top-[93px] left-0 bg-[#fcd4d4]">
      //       <div className="absolute h-[19px] top-[7px] left-[160px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //         Followers(7)
      //       </div>
      //     </div>
      //     <div className="absolute h-[19px] top-[65px] left-[149px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Pretty_bourbon
      //     </div>
          
  
      //     <div className="absolute w-[260px] h-[34px] top-[163px] left-[79px] bg-[#fcd4d4] rounded-[11px]" >
      //     <div className="absolute h-[19px] top-[10px] left-[99px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.19px] leading-[normal] whitespace-nowrap">
      //       search
      //       </div>  
      //     </div>
      //     <div className="absolute w-[443px] h-[76px] top-[256px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Favyy
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Miss Ngoo
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //     <div className="absolute w-[443px] h-[76px] top-[356px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture2} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Mark
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       @clown_powder
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //     <div className="absolute w-[443px] h-[76px] top-[456px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture3} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Sue
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       sue
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //     <div className="absolute w-[443px] h-[76px] top-[556px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture4} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Fidely
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       afro_armah
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //     <div className="absolute w-[443px] h-[76px] top-[656px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture5} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Rolyyn
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       sweetie
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //     <div className="absolute w-[443px] h-[76px] top-[756px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture6} />
      //     <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       Lola
      //       </div>
      //       <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       darling bubu
      //       </div>
      //       <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
      //       FREINDS
      //       </div>
      //     </div>
  
      //   </div>
      // </div>
    );
  };
  
 export default followerlist