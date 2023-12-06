import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Nav from "./Components/Nav.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from "./_auth/forms/Register.jsx";
import Home from "./_root/pages/Home.jsx";
import EditProfile from "./Components/EditProfile.jsx";
import Like from "./assets/Like & Comment/Like.jsx";
import Comment from "./assets/Like & Comment/Comment.jsx";
import Notification from './Components/Notification/Notification.jsx';
import Login from "./_auth/forms/Login.jsx";

// import Register from "./Register.jsx";

function App() {
  return (
    <>
    <main>
      {/* <Login /> */}
      <Routes>
        {/* public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        


        {/* private routes */}
        {/* <Route path="/login" element={<Login />} /> To be worke on  */}
        <Route path="/home" element={<Home />} />

        {/* Component routes */}
        <Route path="/like" element={<Like />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes> 
     </main>
   
    </>
  );
}

export default App;

