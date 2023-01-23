import React from "react";
import CreateClientForm from "../components/forms/createClientForm";
import Navbar from "../components/shared/navbar/Navbar";

const CreateClient = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[15vw]">
        <h2 className="font-size-22 mb-0 font-semibold ">Create Client</h2>
        <CreateClientForm />
      </div>
    </>
  );
};

export default CreateClient;
