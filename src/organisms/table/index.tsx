"use client";

import React, { useState, useMemo } from "react";
import { Container } from "./style";
import { PatientTableProps } from "@/props/patient";

export const PatientTable = ({ data, role }: PatientTableProps) => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [sortField, setSortField] = useState<"Amount" | "Date of service" | "">(
    ""
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;
  const visibleData = role === "viewer" ? data.slice(0, 10) : data;

  const filteredData = useMemo(() => {
    let result = [...visibleData];

    if (role !== "viewer") {
      if (search) {
        result = result.filter(
          (row) =>
            row.PatientID.toLowerCase().includes(search.toLowerCase()) ||
            row["ServiceCode (CPT)"]
              .toLowerCase()
              .includes(search.toLowerCase())
        );
      }

      if (gender) result = result.filter((row) => row.Gender === gender);
      if (status) result = result.filter((row) => row.Status === status);

      if (sortField) {
        result.sort((a, b) => {
          if (sortField === "Amount") {
            return sortOrder === "asc"
              ? a.Amount - b.Amount
              : b.Amount - a.Amount;
          } else {
            return sortOrder === "asc"
              ? new Date(a["Date of service"]).getTime() -
                  new Date(b["Date of service"]).getTime()
              : new Date(b["Date of service"]).getTime() -
                  new Date(a["Date of service"]).getTime();
          }
        });
      }
    }

    return result;
  }, [visibleData, search, gender, status, sortField, sortOrder, role]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData =
    role === "viewer"
      ? filteredData
      : filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleSort = (field: "Amount" | "Date of service") => {
    if (sortField === field) setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <Container>
      {role !== "viewer" && (
        <section className="controls">
          <input
            placeholder="Search by patient Id, Service code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Partially Paid">Partially Paid</option>
            <option value="Denied">Denied</option>
            <option value="Pending">Pending</option>
          </select>
        </section>
      )}
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                onClick={
                  role !== "viewer" &&
                  (key === "Amount" || key === "Date of service")
                    ? () => handleSort(key as "Amount" | "Date of service")
                    : undefined
                }
              >
                {key}{" "}
                {role !== "viewer" &&
                  sortField === key &&
                  (sortOrder === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {role !== "viewer" && (
        <section className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </section>
      )}
    </Container>
  );
};
