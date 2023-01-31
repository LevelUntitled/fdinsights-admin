import React from "react";
import Linecharts from "../charts/Linecharts";
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
import MarketsTable from "./MarketsTable";
import VendorsTable from "./VendorsTable";
import ClientTable from "./ClientTable";
const Index = () => {
  return (
    <div>
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    {/* <CardTitle>The database of FDInsight consumers </CardTitle> */}
                    <CardSubtitle>
                      This is a database of fdinsight dataset
                    </CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      ></div>
                    </div>
                    <ClientTable />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>

      <MarketsTable />
      <VendorsTable />
    </div>
  );
};

export default Index;
