import React, { useEffect, useState } from "react";
import Navbar from "../components/shared/navbar/navBar";
import { Col, Input, Label, Row, Table } from "reactstrap";
import MarketsTable from "../components/calculations/MarketsTable";
import CreateMarketForm from "../components/forms/createMarketForm";
import CreateVendorsForm from "../components/forms/createVendorsForm";
import VendorsTable from "../components/dashboard/VendorsTable";
const calculations = () => {
  return (
    <>
      <Navbar />
      <div className="mx-[15vw]">
        <h2 className="font-size-22 mb-0 mt-2 text-3xl font-bold ">
          Calculations
        </h2>
        <div className="mt-5 mb-5">
          <h1 className="text-2xl font-bold">Create Markets</h1>
          <CreateMarketForm />
        </div>
        <div>
          <h1 className="mb-5 text-2xl font-bold ">View Markets</h1>
          <MarketsTable />
        </div>
        <h1 className="mb-5 text-2xl font-bold ">View Vendors</h1>
        <VendorsTable />
      </div>
      <div className="mt-5 mb-5">
          <h1 className="text-2xl font-bold mx-[15vw]">Create Vendors</h1>
          <CreateVendorsForm />
        </div>
    </>
  );
};

export default calculations;
