import { Link } from "react-router-dom";
const SignButton = () => {
    return ( 
      <div>
        <Link to="/register">
        <button type="submit" className="bg-[#0A31BC] tracking-widest text-white py-[2%] px-[1%] rounded-xl w-[60%] md:w-[70%] md:ml-[15%] ml-[20%]">Submit</button>
        </Link>
       
      </div>
     );
  }
   
  export default SignButton;