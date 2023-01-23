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
                      >
                        <Table
                          id="tech-companies-1"
                          className="table-striped table-bordered table"
                        >
                          <Thead>
                            <Tr>
                              <Th>Company</Th>
                              <Th data-priority="1">Industry</Th>
                              <Th data-priority="3">Address Line 1</Th>
                              <Th data-priority="1">Address Line 2</Th>
                              <Th data-priority="3">City</Th>
                              <Th data-priority="3">Fiscal Start</Th>
                              <Th data-priority="6">Fiscal End</Th>
                              <Th data-priority="6">subStart</Th>
                              <Th data-priority="6">Sub domain</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th>
                                Microsoft
                                <span className="co-name"></span>
                              </Th>
                              <Td>Testline2</Td>
                              <Td>testline1</Td>
                              <Td>Silicon Valley</Td>
                              <Td>582.93</Td>
                              <Td>597.95</Td>
                              <Td>597.73 </Td>
                              <Td>597.91 </Td>
                              <Td>microsoft</Td>
                            </Tr>
                            <Tr>
                              <Th>
                                AAPLE <span className="co-name"></span>
                              </Th>
                              <Td>south street</Td>
                              <Td>North Street dataset</Td>
                              <Td></Td>
                              <Td>373.20</Td>
                              <Td>381.02</Td>
                              <Td>378.92</Td>
                              <Td>378.99</Td>
                              <Td>apple</Td>
                            </Tr>
                            <Tr>
                              <Th>
                                <span className="co-name">Amazon</span>
                              </Th>
                              <Td>south street</Td>
                              <Td>north street 1</Td>
                              <Td>Silicon Valley</Td>
                              <Td>188.39</Td>
                              <Td>194.99</Td>
                              <Td>191.52 </Td>
                              <Td>191.58 </Td>
                              <Td>amazon</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Index;
