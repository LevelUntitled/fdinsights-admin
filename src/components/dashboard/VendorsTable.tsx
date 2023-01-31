import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const VendorsTable = () => {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setError(null);

        setLoading(true);
        const response = await fetch("/api/vendors/getVendors");
        const data = await response.json();
        console.log("code:", data.data);
        setVendors(data.data);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };
    fetchVendors();
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
            <Th data-priority="3">Industry</Th>
            <Th data-priority="1">Headquarters</Th>
            <Th data-priority="1">Founded year</Th>
            <Th data-priority="1">Staff size</Th>
            <Th data-priority="1">Type</Th>
            <Th data-priority="1">Parent Organization</Th>
            <Th data-priority="1">rate</Th>
          </Tr>
        </Thead>
        <Tbody>
          {vendors.map((vendor, idx) => {
            return (
              <Tr key={idx}>
                <Td>{vendor.name}</Td>
                <Td>{vendor.industry}</Td>
                <Td>{vendor.headquarters}</Td>
                <Td>{vendor.foundedYear}</Td>
                <Td>{vendor.staffCount}</Td>
                <Td>{vendor.type}</Td>
                <Td>{vendor.parentOrg}</Td>
                <Td>{vendor.rate}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default VendorsTable;
