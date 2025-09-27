"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./style";
import { PatientRecord, Role } from "@/model/user";
import { ROUTE_LOGIN, ROUTE_UPLOAD } from "@/utils/routes";
import { PatientTable } from "@/organisms";

const Dashboard = () => {
  const [parsedData, setParsedData] = useState<PatientRecord[]>([]);
  const [role, setRole] = useState<Role>("");
  const { push } = useRouter();

  const onClickUpload = () => push(ROUTE_UPLOAD);

  useEffect(() => {
    const storedData = sessionStorage.getItem("parsedData");
    if (storedData) {
      setParsedData(JSON.parse(storedData) as PatientRecord[]);
    }

    const storedRole = localStorage.getItem("userRole") as Role | null;
    if (storedRole) setRole(storedRole);
  }, []);

  if (parsedData.length === 0) {
    return (
      <Container>
        <section className="no-data-found">
          <p>No uploaded data found. Please upload a file first.</p>
          <button className="upload-button" onClick={onClickUpload}>
            Upload File
          </button>
        </section>
      </Container>
    );
  }

  const onClickToUpload = () => push(ROUTE_UPLOAD);

  const onClickLogout = () => {
    alert("Logged out successfully");
    push(ROUTE_LOGIN);
  };

  return (
    <Container>
      <section className="header">
        <h2>Patient Records Dashboard</h2>
        <section className="button-wrapper">
          {role === "admin" && (
            <button className="upload-button" onClick={onClickToUpload}>
              Upload File
            </button>
          )}
          <button className="logout" onClick={onClickLogout}>
            Logout
          </button>
        </section>
      </section>
      <PatientTable data={parsedData} role={role} />
    </Container>
  );
};

export default Dashboard;
