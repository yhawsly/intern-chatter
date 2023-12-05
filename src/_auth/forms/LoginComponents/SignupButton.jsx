import { Link } from "react-router-dom";
const SignButton = () => {
    return ( 
      <div>
        <Link to="/register">
        <button type="submit" className="bg-[#056C80] tracking-widest text-white py-[2%] px-[1%] rounded-xl w-[60%] ml-[20%]">REGISTER</button>
        </Link>
       
      </div>
     );
  }
   
  export default SignButton;