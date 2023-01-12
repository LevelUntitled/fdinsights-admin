import React, { useState } from "react";
import Sidebar from "../sideBar/sideBar";

const Navbar = () => {
  const [isButton1Open, setIsButton1Open] = useState(false);
  const [isButton2Open, setIsButton2Open] = useState(false);
  const [isButton3Open, setIsButton3Open] = useState(false);

  const handleButtonClick = (button: any) => {
    setIsButton1Open(false);
    setIsButton2Open(false);
    setIsButton3Open(false);
    switch (button) {
      case 1:
        setIsButton1Open(true);
        break;
      case 2:
        setIsButton2Open(true);
        break;
      case 3:
        setIsButton3Open(!isButton3Open);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="flex h-16 items-center justify-between border-b-2 bg-white text-[#555B6D]">
      <div className="flex items-center">
        <h3 className=" text-xl font-medium">
          <Sidebar />
        </h3>
      </div>
      <div className="flex">
        <button
          className="relative flex h-full flex-row items-center justify-center  p-2 text-[#555B6D] hover:bg-[#E6E6E6]"
          onClick={() => handleButtonClick(3)}
        >
          <div className=" h-10 w-10 rounded-full  border-2 bg-yellow-200 "></div>{" "}
          Admin <i className="fas fa-caret-down ml-2"></i>
          {isButton3Open && (
            <div className="absolute top-16 left-0 rounded-lg bg-gray-700 ">
              <p className="text-[#555B6D]">Menu 3</p>
              <p className="text-[#555B6D]">Menu 3</p>
              <p className="text-[#555B6D]">Logout</p>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
