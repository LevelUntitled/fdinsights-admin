import { Status } from "@prisma/client";
import { z } from "zod";
import { NextRouter } from "next/router";
import { superAdminRouter } from "../../server/trpc/router/superAdmin";
import React, { FC, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { trpc } from "../../utils/trpc";
import Link from "next/link";
const CreateClientForm: FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    logo: "",
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

  //create entry in prisma and trpc db with handle change and handlesubmit functions

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await trpc.superAdmin.createClient.useMutation(formData);
    } catch (err) {
      console.log(err);
    }
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
              name="addLine1"
              value={formData.addLine1}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">address Line 2</Label>
            <Input
              className="form-control"
              type="text"
              name="addLine2"
              value={formData.addLine2}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">City</Label>
            <Input
              className="form-control"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">postcode</Label>
            <Input
              className="form-control"
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">state</Label>
            <Input
              className="form-control"
              type="text"
              name="state"
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
              name="fiscalEnd"
              value={formData.fiscalEnd}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">fiscal Start</Label>
            <Input
              className="form-control"
              type="text"
              name="fiscalStart"
              value={formData.fiscalStart}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub start</Label>
            <Input
              className="form-control"
              type="text"
              name="subStart"
              value={formData.subStart}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <Label htmlFor="industry">Sub end</Label>
            <Input
              className="form-control"
              type="text"
              name="subEnd"
              value={formData.subEnd}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">notes</Label>
            <Input
              className="form-control"
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="industry">Sub Domain</Label>
            <Input
              className="form-control"
              type="text"
              name="subDomain"
              value={formData.subDomain}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>

      <Link href="/dashboard">
        <button className="btn btn-success text-black " type="submit">
          Create Client
        </button>
      </Link>
    </form>
  );
};

export default CreateClientForm;
