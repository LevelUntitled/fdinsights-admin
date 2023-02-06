import React, { useEffect } from "react";
import Navbar from "../components/shared/navbar/navBar";
import CreateVendorsForm from "../components/forms/createVendorsForm";

const CreateVendors = () => {
  useEffect(() => {
    const getAllVendors= async () => {
      const data = await fetch("/api/vendors/getVendors");
      const vendors = await data.json();
      console.log(vendors);
  
    };
    getAllVendors();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mx-[15vw]">
        <h2 className="font-size-22 mb-0 font-bold text-3xl mt-2">Create Vendors</h2>
        <CreateVendorsForm />
      </div>
    </>
  );
};

export default CreateVendors;
