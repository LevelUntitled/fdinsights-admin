import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <button className="rounded-lg bg-gray-600 p-2 text-white">
            hello
          </button>
        ) : (
          <button className="rounded-lg bg-gray-600 p-2 text-white">
            bello
          </button>
        )}
      </button>
      <div
        className={`absolute top-0 left-0 transform rounded-lg bg-gray-200  transition duration-500 ease-in-out ${
          isOpen ? "w-64 translate-x-0" : "w-12 translate-x-0"
        }`}
      >
        {isOpen ? (
          <div>
            <h3 className="text-lg font-medium">Sidebar Content</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <i className="fas fa-home fa-2x m-2"></i>
            <i className="fas fa-search fa-2x m-2"></i>
            <i className="fas fa-envelope fa-2x m-2"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
