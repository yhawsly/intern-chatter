import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Nav from "./Components/shared/Nav.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from "./_auth/forms/Register.jsx";
import Home from "./_root/pages/Home.jsx";
import EditProfile from "./Components/EditProfile.jsx";
import Comment from "./assets/Like & Comment/Comment.jsx";
import Notification from './Components/Notification/Notification.jsx';
import Login from "./_auth/forms/Login.jsx";
import Profile_page from './Components/profile components/Profile_page.jsx';
import Blogcontent from './Components/profile components/Blogcontent.jsx';
import Carousel from './Components/profile components/carousel.jsx';
import Followerlist from '/src/Components/Followerlist.jsx';
import Explore from "./_root/pages/Explore.jsx";
import Profileviewer from "./Components/Profileviewer.jsx";
import Followbutton from "./Components/Followbutton.jsx";
import Like from "./assets/Like & Comment/Like.jsx";


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
        <Route index element={<Home />} />

        {/* Component routes */}
        <Route path="/like" element={<Like />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/blog-content" element={<Blogcontent />} />
        <Route path="/carousel" element={<carousel />} />
        {/* <Route path="/Data" element={<Data />} /> */}
        <Route path="/profile-page" element={<Profile_page />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/follower-list" element={<Followerlist />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/viewer" element={<Profileviewer />} />
        <Route path="/follow-button" element={<Followbutton />} />
        <Route path="/like" element={<Like />} />
        <Route path="/comment" element={<Comment />} />
        

      </Routes> 
     </main>
   
    </>
  );
}

export default App;

