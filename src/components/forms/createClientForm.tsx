import React, { FC, useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";
const CreateClientForm: FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    logo: "",
    industry: "",
    addLine1: "",
    addLine2: "",
    city: "",
    // write postcode as int
    postcode: "",
    state: "",
    fiscalStart: "",
    fiscalEnd: "",
    subStart: "",
    subEnd: "",
    notes: "",
    subDomain: "",
    superUser: "",
    // status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch("/api/superAdmin/createClient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: formData.company,
          logo: formData.logo,
          industry: formData.industry,
          addLine1: formData.addLine1,
          addLine2: formData.addLine2,
          city: formData.city,
          postcode: formData.postcode,
          state: formData.state,
          fiscalStart: formData.fiscalStart,
          fiscalEnd: formData.fiscalEnd,
          subStart: formData.subStart,
          subEnd: formData.subEnd,
          notes: formData.notes,
          subDomain: formData.subDomain,
          superUsers: formData.superUser,
          // status: formData.status,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // router.push("/dashboard");
        });
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
            <Label htmlFor="logo">Logo</Label>
            <Input
              className="form-control"
              type="text"
              name="logo"
              value={formData.logo}
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
          <div className="mb-3">
            <Label htmlFor="industry">Super User</Label>
            <Input
              className="form-control"
              type="text"
              name="superUser"
              value={formData.superUser}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-3">
            <Label htmlFor="industry">Status</Label>
            <Input
              className="form-control"
              type="text"
              name="subDomain"
              value={formData.status}
              onChange={handleChange}
            />
          </div> */}
        </Col>
      </Row>

      <button className="btn btn-success text-black " type="submit">
        Create Client
      </button>
    </form>
  );
};

export default CreateClientForm;
