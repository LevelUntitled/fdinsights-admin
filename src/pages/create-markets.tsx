import React, { useState, useEffect } from "react";

// use /pages/api/market.tsx to create a new market

const CreateMarket = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    parentClient: "",
    type: "",
  });
  const [markets, setMarkets] = useState(""); // [

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = fetch("/api/markets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          country: formData.country,
          parentClient: formData.parentClient,
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

  useEffect(() => {
    const getAllMarkets = async () => {
      const data = await fetch("/api/markets/getAll");
      const markets = await data.json();
      console.log(markets);
      setMarkets(markets);
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
          <label htmlFor="country">Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            value={formData.country}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentClient">Parent Client</label>
          <input
            className="form-control"
            type="text"
            name="parentClient"
            value={formData.parentClient}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentClient">Market Types</label>
          <input
            className="form-control"
            type="text"
            name="type"
            value={formData.type.toUpperCase()}
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

export default CreateMarket;
