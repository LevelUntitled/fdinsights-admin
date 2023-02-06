import React, { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<any>(true);
  const [isButton1Open, setIsButton1Open] = useState<any>(false);
  const [isButton2Open, setIsButton2Open] = useState<any>(false);
  const [isButton3Open, setIsButton3Open] = useState<any>(false);

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
        {isModalOpen ? (
          <div className="ease-in-x fixed top-0 left-0 h-[100vh] w-[12vw] bg-[#0C1427] ">
            {/* this is for logo  */}
            <div>
              {" "}
              <span>logo</span>
              <button
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            {/* links  */}
            <ul className="pt-20">
              <li>
                <Link
                  className="flex flex-row items-center gap-4"
                  href="/dashboard"
                >
                  <span>
                    <RxDashboard />
                  </span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-row items-center gap-4"
                  href="create-client"
                >
                  <span>
                    <RxDashboard />
                  </span>
                  Create Client
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-row items-center gap-4"
                  href="/create-markets"
                >
                  <span>
                    <RxDashboard />
                  </span>
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-row items-center gap-4"
                  href="/create-vendors"
                >
                  <span>
                    <RxDashboard />
                  </span>
                  Vendors
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-row items-center gap-4"
                  href="/calculations"
                >
                  <span>
                    <RxDashboard />
                  </span>
                  Calculations
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="absolute top-0 left-0 h-[100vh] w-[4vw] bg-[#0C1427] ">
              {/* this is for logo  */}
              <div>
                {" "}
                <span>logo</span>
                <button
                  className="ml-[4vw]"
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                  }}
                >
                  <GiHamburgerMenu />
                </button>
              </div>
              {/* links  */}
              <ul className="pt-20">
                <li>
                  <Link className="flex flex-row items-center gap-4" href="#">
                    <span>
                      <RxDashboard />
                    </span>
                    {/* <RxDashboard /> */}
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <GiHamburgerMenu />
          </>
        )}
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
