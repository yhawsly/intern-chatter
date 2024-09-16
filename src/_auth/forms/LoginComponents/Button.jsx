import { Link } from "react-router-dom";
const Button = () => {
    return ( 
      <div>
        {/* Replace the '/home' with where the user can see his/her posts and followers and likes and post stuff */}
        <Link to="/home">
        <button type="submit" className="bg-[#056C80] tracking-widest text-white py-[2%] px-[1%] rounded-xl w-[60%] md:w-[70%] md:ml-[15%] ml-[20%]">LOGIN</button>
        </Link>
        
      </div>
     );
  }
   
  export default Button;