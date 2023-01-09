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
      <label htmlFor="industry">address Line 1</label>
      <input
        type="text"
        name="industry"
        value={formData.addLine1}
        onChange={handleChange}
      />
      <label htmlFor="industry">address Line 2</label>
      <input
        type="text"
        name="industry"
        value={formData.addLine2}
        onChange={handleChange}
      />
      <label htmlFor="industry">City</label>
      <input
        type="text"
        name="industry"
        value={formData.city}
        onChange={handleChange}
      />
      <label htmlFor="industry">postcode</label>
      <input
        type="text"
        name="industry"
        value={formData.postcode}
        onChange={handleChange}
      />
      <label htmlFor="industry">state</label>
      <input
        type="text"
        name="industry"
        value={formData.state}
        onChange={handleChange}
      />
      <label htmlFor="industry">fiscalEnd</label>
      <input
        type="text"
        name="industry"
        value={formData.fiscalEnd}
        onChange={handleChange}
      />
      <label htmlFor="industry">fiscal Start</label>
      <input
        type="text"
        name="industry"
        value={formData.fiscalStart}
        onChange={handleChange}
      />
      <label htmlFor="industry">Sub start</label>
      <input
        type="text"
        name="industry"
        value={formData.subStart}
        onChange={handleChange}
      />
      <label htmlFor="industry">Sub end</label>
      <input
        type="text"
        name="industry"
        value={formData.subEnd}
        onChange={handleChange}
      />
      <label htmlFor="industry">notes</label>
      <input
        type="text"
        name="industry"
        value={formData.notes}
        onChange={handleChange}
      />
      <label htmlFor="industry">Sub Domain</label>
      <input
        type="text"
        name="industry"
        value={formData.subDomain}
        onChange={handleChange}
      />

      <button type="submit">Create Client</button>
    </form>
  );
};

export default CreateClient;
