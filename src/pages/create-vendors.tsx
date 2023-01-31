import React, { useState, useEffect } from "react";

// use /pages/api/market.tsx to create a new market

const CreateVendors = () => {
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
  const [vendors, setVendors] = useState(""); // [

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

  useEffect(() => {
    const getAllMarkets = async () => {
      const data = await fetch("/api/markets/getAll");
      const markets = await data.json();
      console.log(markets);
      setVendors(markets);
    };
    getAllMarkets();
  }, []);

  return (
    <div>
      CreateMarket
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="industry">Industry</label>
          <input
            className="form-control"
            type="text"
            name="industry"
            value={formData.industry}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="headquarters">Headquarters</label>
          <input
            className="form-control"
            type="text"
            name="headquarters"
            value={formData.headquarters}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="foundedYear">Founded Year</label>
          <input
            className="form-control"
            type="text"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="staffCount">Staff Count</label>
          <input
            className="form-control"
            type="text"
            name="staffCount"
            value={formData.staffCount}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type">Type</label>
          <input
            className="form-control"
            type="text"
            name="type"
            value={formData.type}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentOrg">Parent Org</label>
          <input
            className="form-control"
            type="text"
            name="parentOrg"
            value={formData.parentOrg}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentOrg">Rate</label>
          <input
            className="form-control"
            type="text"
            name="rate"
            value={formData.rate}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  );
};

export default CreateVendors;
