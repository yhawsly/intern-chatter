import image from "../image/prof.png";
// import "./App.css"; Still have to import it's CSS
function EditProfile() {
  return (
    <div className="w-[400px] h-[850px] flex flex-col justify-between items-center bg-white rounded-lg border-2 border-white text-black shadow-lg shadow-lime-950 ">
      <div className="mr-[320px] text-bold mt-2">Back</div>
      <div className="flex items-center justify-center mt-1">
        <div className="text-black mb-10 mr-[40px] font-bold">Edit Profile</div>

        <div className="rounded-full overflow-hidden border-4 border-teal-500 mr-[150px]">
          <img className="w-20 h-20  object-cover" src={image} alt="Profile" />
        </div>
      </div>
      {/* form */}
      <form className="h-100 w-full p-4 mt-4 space-y-3">
        <div className=" text-center font-bold ">
          <h1 className=" text-teal-500">Akoto Ernest</h1>
          <h2>Reporter/JoyFm 99.7</h2>
          <h3>Volta</h3>
        </div>
        <input type="text" placeholder="Full Name" className="inputClass" />
        <input type="text" placeholder="Email" className="inputClass" />
        <input type="text" placeholder="Phone number" className="inputClass" />
        <input type="text" placeholder="Address" className="inputClass" />
        <input type="text" placeholder="Education" className="inputClass" />
        <input type="text" placeholder="Area/Town" className="inputClass" />
        <input type="text" placeholder="Region" className="inputClass" />
        <input type="text" placeholder="Country" className="inputClass" />
        <div className="ml-[290px] text-black font-bold">More</div>
      </form>
      <button className="h-[38px] w-44 bg-teal-600 border-teal-500 border-2 text-white rounded-xl m-5">
        Save change
      </button>
    </div>
  );
}

export default EditProfile;
