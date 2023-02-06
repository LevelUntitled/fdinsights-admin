import React, { useState, useEffect } from "react";
import CreateClientForm from "../components/forms/createClientForm";
import Navbar from "../components/shared/navbar/navBar";

const CreateClient = () => {
  useEffect(() => {
    const getAllClients = async () => {
      const data = await fetch("/api/superAdmin/getAllClient");
      const clients = await data.json();
      console.log(clients);
      // setFetchData(clients);
    };
    getAllClients()
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-[15vw]">
        <h2 className="font-size-22 mb-0 font-bold text-3xl mt-2 ">Create Client</h2>
        <CreateClientForm />
      </div>
    </>
  );
};

export default CreateClient;
