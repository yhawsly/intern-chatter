import Button from "./LoginComponents/Button";
import Textinput from "./LoginComponents/Inputtext";
import Inputpassword from "./LoginComponents/Passwordinput";
import ShowPassword from "./LoginComponents/Showpassword";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Email from "./LoginComponents/Emailinput";
import Home from "../../_root/pages/Home";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaKey } from "react-icons/fa";



const Login = () => {

    const history = useHistory();

  // Array of user data
  const users = [
    { name: 'Theo', email: 'theo@gmail.com', password: 'theo123' },
    { name: 'Sam', email: 'sam@gmail.com', password: 'sam123' },
    {name: 'Joe', email:'joe@gmail.com', password:'joe123'}
    // Add more users as needed
  ];

  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any user
    const foundUser = users.find(
      (user) => user.name === name && user.email === email && user.password === password
    );

    if (foundUser) {
      // Navigate to the home page if the user is found
      history.push('/home');
    } else {
      // Alert if user not found
      alert('User not found');
    }
  };

    return ( 
        <div className="flex items-cente justify-center h-screen m-[5%] md:mt-[5%]">
            
      <div className="bg-black h-[80%] w-[50%] object-contain shadow-[0_0_10px_1px_gray] rounded-2xl absolute p-[5%] max-[100%] md:h-full">
        <h1 className="ml-[45%] font-bold text-2xl sm:ml-[35%] md:ml-[40%] xl:text-5xl xl:ml-[35%] xl:mb-[10%] md:text-3xl md:mb-[2%] sm:mt-[5%]">LOGIN</h1>

        <form onSubmit={handleSubmit}>

        
        {/* Username input */}
        <div className="mb-[5%] md:mt-[2%] sm:mt-[10%] sm:mb-[5%]">
          <label htmlFor="" className="xl:text-2xl  md:text-xl sm:text-lg">
            Username
          </label>
          {/* <Textinput /> */}
          <FaUser className="absolute mt-[1.5%] ml-[2%] text-lg"/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>

        </div>

        {/* Email input */}
        <div className="mb-[5%] sm:mb-[5%]">
          <label htmlFor="" className="xl:text-2xl md:text-xl sm:text-lg">
            Email
          </label>
          {/* <Email /> */}
          <HiOutlineMail className="absolute mt-[1.5%] ml-[2%] text-lg"/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>

        </div>

        {/* Password input */}
        <div className="mb-[5%] sm:mb-[5%]">
          <label htmlFor="" className="xl:text-2xl md:text-xl sm:text-lg">
            Password
          </label>
          {/* <Inputpassword /> */}
          <FaKey className="absolute mt-[1.5%] ml-[2%] text-lg" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 hover:border-[#056C80] h-10 w-[100%] rounded-xl bg-gray-200 pl-[8%] p-auto" required/>

          <div>
            <ShowPassword />
          </div>
          <Link to="/register" className="text-[#056C80] font-bold text-xs xl:text-lg md:text-xs">REGISTER</Link>
        </div>

        

        <div>
        {/* <Button /> */}
                {/* Replace the '/home' with where the user can see his/her posts and followers and likes and post stuff */}

        <button type="submit" className="bg-[#056C80] tracking-widest text-white py-[2%] px-[1%] rounded-xl w-[60%] md:w-[70%] md:ml-[15%] ml-[20%]">LOGIN</button>

        </div>

        <div className="justify-center ml-[35%] mt-[1%] text-sm sm:ml-[25%] xl:text-xl md:text-xl">
          <div>
            Don't have an account?
          </div>
          <div>
            <Link to="/register" className="text-[#056C80] ml-[15%]">
              Sign up
            </Link>
          </div>
        </div>
        </form>
      </div>
    </div>
     );
}
 
export default Login;