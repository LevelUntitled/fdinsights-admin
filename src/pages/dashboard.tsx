import React from "react";
import Index from "../components/dashboard/Index";

import Navbar from "../components/shared/navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[15vw]">
        <h1 className="my-8">Dashboard</h1>
        <Index />
      </div>
    </>
  );
};

export default Dashboard;
