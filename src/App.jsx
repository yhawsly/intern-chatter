import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mypicture from "./images/fav.jpg";
import mypicture2 from "./images/mark.jpg";
import mypicture3 from "./images/sue.jpg";
import mypicture4 from "./images/phid.jpg";
import mypicture5 from "./images/rozey.jpg";
import mypicture6 from "./images/lola.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[443px] h-[890px] relative">
        <div className="absolute w-[443px] h-[5px] top-[89px] left-0 bg-black ">
        </div>
        <div className="absolute w-[260px] h-[16px] top-[463px] left-[79px] bg-black rounded-[11px] ">
        </div>

        <div className="absolute w-[443px] h-[54px] top-[93px] left-0 bg-[#fcd4d4]">
          <div className="absolute h-[19px] top-[7px] left-[160px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
            Followers(7)
          </div>
        </div>
        <div className="absolute h-[19px] top-[65px] left-[149px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Pretty_bourbon
        </div>
        

        <div className="absolute w-[260px] h-[34px] top-[163px] left-[79px] bg-[#fcd4d4] rounded-[11px]" >
        <div className="absolute h-[19px] top-[10px] left-[99px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.19px] leading-[normal] whitespace-nowrap">
          search
          </div>
        </div>
        <div className="absolute w-[443px] h-[76px] top-[256px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Favyy
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Miss Ngoo
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

        <div className="absolute w-[443px] h-[76px] top-[356px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture2} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Mark
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          @clown_powder
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

        <div className="absolute w-[443px] h-[76px] top-[456px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture3} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Sue
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          she_is_sue
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

        <div className="absolute w-[443px] h-[76px] top-[556px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture4} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Fidely
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          afro_armah
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

        <div className="absolute w-[443px] h-[76px] top-[656px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture5} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Rolyyn
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          sweetie
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

        <div className="absolute w-[443px] h-[76px] top-[756px] left-0 bg-[#fcf8f8]" ><img className="absolute w-[101px] h-[76px] top-0 left-0 " src={mypicture6} />
        <div className="absolute h-[19px] top-[15px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          Lola
          </div>
          <div className="absolute h-[19px] top-[37px] left-[110px] [font-family:'Inter-Light',Helvetica] font-light text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          darling bubu
          </div>
          <div className="absolute h-[19px] top-[32px] left-[344px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] text-center tracking-[0.16px] leading-[normal] whitespace-nowrap">
          FREINDS
          </div>
        </div>

      </div>
    </div>
  );
};






export default App;
