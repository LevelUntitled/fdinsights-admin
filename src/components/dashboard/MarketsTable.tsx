import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const MarketsTable = () => {
  const [markets, setMarkets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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
            <Th data-priority="1">Market Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {markets.map((market, idx) => {
            return (
              <Tr key={idx}>
                <Td>{market.name}</Td>
                <Td>{market.country}</Td>
                <Td
                  clssName={
                    market.status == "ACTIVE" ? "text-red-500" : "text-blue-200"
                  }
                >
                  {market.status}
                </Td>
                <Td>{market.type}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default MarketsTable;
