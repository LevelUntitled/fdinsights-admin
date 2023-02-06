import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { CgCloseR } from "react-icons/cg";
import { MdModeEditOutline } from "react-icons/md";
const MarketsTable = () => {
  const [markets, setMarkets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [globalId, setGlobalId] = useState<any>(0);
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
          name:formData.name,
          id: globalId,
          country: formData.country,
          status: formData.status,
          type: formData.type,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchMarkets();
        });
    } catch (err) {
      console.log(err);
    }
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const openModal = (id: Number) => {
    toggleModal();
    setGlobalId(id);
  };

  const fetchMarkets = async () => {
    try {
      setError(null);

      setLoading(true);
      const response = await fetch("/api/markets/getAll");
      const data = await response.json();
      console.log("code:", data.data);
      setMarkets(data.data);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };
  const setStatus = async (id: any, status: any) => {
    let newStatus = status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    try {
      const data = fetch("/api/markets/updateMarket", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: newStatus,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          fetchMarkets();
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMarkets();
  }, [globalId]);

  return (
    <div>
      <Table
        id="tech-companies-1"
        className="table-striped table-bordered table"
      >
        <Thead>
          <Tr>
            <Th data-priority="1">Name</Th>
            <Th data-priority="1">Country</Th>
            <Th data-priority="1">status</Th>
            <Th data-priority="1">Market Type</Th>
            <Th data-priority="1">Action</Th>
          </Tr>
        </Thead>
        <Tbody className="">
          {markets.map((market, idx) => {
            return (
              <Tr key={idx}>
                <Td>{market.name}</Td>
                <Td>{market.country}</Td>
                <Td>
                  <button
                    className={`${
                      market.status === "ACTIVE"
                        ? "text-red-500"
                        : "text-blue-500"
                    } font-bold`}
                    onClick={() => {
                      setStatus(market.id, market.status);
                    }}
                  >
                    {market.status}
                  </button>
                </Td>
                <Td>{market.type}</Td>
                <Td>
                  <button
                    onClick={() => {
                      openModal(market.id);
                    }}
                  >
                    <MdModeEditOutline />
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <Row className="mt-5 rounded-xl bg-gray-200 p-5">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Editing Market {globalId} </h1>
              <button
                onClick={() => {
                  toggleModal();
                }}
              >
                {" "}
                <CgCloseR />
              </button>
            </div>

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
      ) : (
        ""
      )}
    </div>
  );
};

export default MarketsTable;
