import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ClientTable = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setError(null);

        setLoading(true);
        const response = await fetch("/api/superAdmin/getAllClient");
        const data = await response.json();
        console.log("code:", data.data);
        setClients(data.data);
      } catch (error) {
        // @ts-ignore
        setError(error);
      }
      setLoading(false);
    };
    fetchMarkets();
  }, []);

  return (
    <div>
      <Table
        id="tech-companies-1"
        className="table-striped table-bordered table"
      >
        <Thead>
          <Tr>
            <Th data-priority="1">Name</Th>
            <Th data-priority="3">Country</Th>
            <Th data-priority="1">status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clients.map((client, idx) => {
            return (
              <Tr key={idx}>
                <Td>{client.company}</Td>
                <Td>{client.industry}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default ClientTable;
