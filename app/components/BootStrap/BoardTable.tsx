"use client";
import { BoardTableProps, BoardType } from "@/types/boardTypes";
import Link from "next/link";
import { SSRProvider } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function BoardTable({ boardList }: BoardTableProps) {
  return (
    <Table hover>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th style={{ width: "3%" }}>#</th>
          <th style={{ width: "65%" }}>제목</th>
          <th style={{ width: "10%" }}>작성일자</th>
          <th style={{ width: "5%" }}>조회</th>
        </tr>
      </thead>
      <tbody>
        {boardList.map((board, i) => (
          <tr key={i}>
            <td style={{ textAlign: "center" }}>{i + 1}</td>

            <td>
              <Link
                href={`/notice/${board._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {board.title}
              </Link>
            </td>

            <td style={{ textAlign: "center" }}>{board.date}</td>
            <td style={{ textAlign: "center" }}>{board.views}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
