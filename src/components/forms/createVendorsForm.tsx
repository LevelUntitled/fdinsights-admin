import React, { FC, useState, useEffect } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const CreateVendorsForm:FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    headquarters: "",
    foundedYear: "",
    staffCount: "",
    type: "",
    parentOrg: "",
    rate: "",
  });

  const [vendors, setVendors] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = fetch("/api/vendors/createVendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          industry: formData.industry,
          headquarters: formData.headquarters,
          foundedYear: formData.foundedYear,
          staffCount: formData.staffCount,
          type: formData.type,
          parentOrg: formData.parentOrg,
          rate: formData.rate,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      console.log(formData.rate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-[15vw]">
      <Row className="mt-5 bg-gray-200 rounded-xl p-5 mb-5">
        <Col md={6}>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="name">Name</Label>
            <Input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="industry">Industry</Label>
            <Input
              className="form-control"
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="headquarters">Headquarters</Label>
            <Input
              className="form-control"
              type="text"
              name="headquarters"
              value={formData.headquarters}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="foundedYear">Founded Year</Label>
            <Input
              className="form-control"
              type="text"
              name="foundedYear"
              value={formData.foundedYear}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="staffCount">Staff Count</Label>
            <Input
              className="form-control"
              type="text"
              name="staffCount"
              value={formData.staffCount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="type">Type</Label>
            <Input
              className="form-control"
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="parentOrg">Parent Org</Label>
            <Input
              className="form-control"
              type="text"
              name="parentOrg"
              value={formData.parentOrg}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label className="font-bold" htmlFor="rate">Rate</Label>
            <Input
              className="form-control"
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success text-black " type="submit">
        Create Vendors
      </button>
        </Col>
        
      </Row>

    </form>
  );
};

export default CreateVendorsForm;
