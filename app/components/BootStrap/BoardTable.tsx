"use client";
import { SSRProvider } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function BoardTable() {
  return (
    <SSRProvider>
      <Table hover>
        <thead>
          <tr>
            <th style={{ width: "3%" }}>#</th>
            <th style={{ width: "70%" }}>제목</th>
            <th style={{ width: "10%" }}>작성일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Otto</td>
            <td>2000.00.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Thornton</td>
            <td>2000.00.00</td>
          </tr>
        </tbody>
      </Table>
    </SSRProvider>
  );
}
