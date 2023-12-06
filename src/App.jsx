import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Nav from "./Components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./_auth/forms/Register.jsx";
import Home from "./_root/pages/Home.jsx";
import EditProfile from "./Components/EditProfile.jsx";
// import Login from "./_auth/forms/Login.jsx";

// import Register from "./Register.jsx";

function App() {
  return (
    <>
    <main>
      {/* <Login /> */}
      <Routes>
        {/* public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfile />} />


        {/* private routes */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route index element={<Home />} />
      </Routes> 
     </main>
   
    </>
  );
}

export default App;

