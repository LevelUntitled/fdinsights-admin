import { Status } from "@prisma/client";
import { z } from "zod";

import { superAdminRouter } from "../../server/trpc/router/superAdmin";
import React, { FC, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { trpc } from "../../utils/trpc";
const CreateClientForm: FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // create a function that post data in prisma with superAdmin.ts

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clientSchema = z.object({
      company: z.string(),
      industry: z.string(),
      addLine1: z.string(),
      addLine2: z.string(),
      city: z.string(),
      postcode: z.string(),
      state: z.string(),
      fiscalStart: z.string(),
      fiscalEnd: z.string(),
      subStart: z.string(),
      subEnd: z.string(),
      notes: z.string(),
      subDomain: z.string(),
    });
    const clientData = clientSchema.parse(formData);

    // const client = await superAdminRouter.createClient(clientData);
    // console.log(client);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <div className="mb-3">
            <Label htmlFor="company">Company</Label>
            <Input
              className="form-control"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Industry</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">address Line 1</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.addLine1}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">address Line 2</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.addLine2}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">City</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">postcode</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.postcode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">state</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mb-3">
            <Label htmlFor="industry">fiscalEnd</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.fiscalEnd}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">fiscal Start</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.fiscalStart}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub start</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.subStart}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub start</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.subStart}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub end</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.subEnd}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">notes</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub Domain</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.subDomain}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>

      <button
        className="btn btn-success waves-effect waves-light"
        type="submit"
      >
        Create Client
      </button>
    </form>
  );
};

export default CreateClientForm;
