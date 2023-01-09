import { Status } from "@prisma/client";
import { z } from "zod";

import {
  publicProcedure,
  protectedProcedure,
  router,
  superAdminRouter,
} from "../server/trpc/router/superAdmin";
import { FC, useState } from "react";

const CreateClient: FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    addLine1: "",
    addLine2: "",
    city: "",
    postcode: "",
    state: "",
    fiscalStart: "",
    fiscalEnd: "",
    subStart: "",
    subEnd: "",
    notes: "",
    subDomain: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //upload all the data in trpc
  const handleSubmit = (event) => {
    event.preventDefault();

    superAdminRouter
      .createClient({
        ctx: {
          prisma,
        },
        input: formData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <label htmlFor="industry">Industry</label>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
      />
      {/* other form fields */}
      <button type="submit">Create Client</button>
    </form>
  );
};

export default CreateClient;
