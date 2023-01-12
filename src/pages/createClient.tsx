import React from "react";
import CreateClientForm from "../components/forms/createClientForm";
import Navbar from "../components/shared/navbar/navBar";

const CreateClient = () => {
  return (
    <>
      <Navbar />
      <h2 className="font-size-22 mb-0 font-semibold ">Create Client</h2>
      <CreateClientForm />
    </>
  );
};

export default CreateClient;
