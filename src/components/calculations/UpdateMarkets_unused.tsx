import React, { FC, useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";

interface LayoutProps {
  id: Number;
}
const UpdateMarkets: FC<LayoutProps> = ({ id }) => {
    console.log(`FROM UPDATE MARKET : ${id}`)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    country: "",
    type: "",
    status: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = fetch("/api/markets/updateMarket", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          country: formData.country,
          status: formData.status,
          type: formData.type,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row className="mt-5 rounded-xl bg-gray-200 p-5">
        <h1 className="text-xl font-bold">Editing Market {id} </h1>

          <Col md={6}>
            <div className="mb-3">
              <Label className="font-bold" htmlFor="company">
                Company
              </Label>
              <Input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <Label className="font-bold" htmlFor="country">
                Country
              </Label>
              <Input
                className="form-control"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            {/* <div className="mb-3">
              <Label className="font-bold" htmlFor="parentClient">
                Parent Client
              </Label>
              <Input
                className="form-control"
                type="text"
                name="parentClient"
                value={formData.parentClient}
                onChange={handleChange}
              />
            </div> */}

            <div className="mb-3">
              <Label className="font-bold" htmlFor="type">
                Market Types
              </Label>
              <Input
                className="form-control"
                type="text"
                name="type"
                value={formData.type.toUpperCase()}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <Label className="font-bold" htmlFor="type">
                Market status
              </Label>
              <Input
                className="form-control"
                type="text"
                name="status"
                value={formData.status.toUpperCase()}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success text-black " type="submit">
              Update Market
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default UpdateMarkets;
