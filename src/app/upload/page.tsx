"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";
import assets from "@/assets";
import { useRouter } from "next/navigation";
import { Container } from "./style";
import { ROUTE_DASHBOARD } from "@/utils/routes";

const FileUpload = () => {
  const [fileName, setFileName] = useState<string>("");
  const { push, back } = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem("parsedData");
    const storedName = sessionStorage.getItem("uploadedFileName");
    if (storedData && storedName) {
      setFileName(storedName);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (evt) => {
        const arrayBuffer = evt.target?.result;
        if (!arrayBuffer) return;
        const data = new Uint8Array(arrayBuffer as ArrayBuffer);
        let binary = "";
        for (let i = 0; i < data.length; i++) {
          binary += String.fromCharCode(data[i]);
        }

        const wb = XLSX.read(binary, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const parsedData = XLSX.utils.sheet_to_json(ws, { defval: "" });

        sessionStorage.setItem("parsedData", JSON.stringify(parsedData));
        sessionStorage.setItem("uploadedFileName", file.name);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleDelete = () => {
    setFileName("");
    sessionStorage.removeItem("parsedData");
    sessionStorage.removeItem("uploadedFileName");
  };

  const onClickToDashboard = () => push(ROUTE_DASHBOARD)

  return (
    <Container>
      <section className="file-section">
        <section className="drop-zone">
          <Image src={assets.img_upload} alt="upload" width={80} height={80} />
          <label htmlFor="file-upload" className="browse-btn">
            Browse
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx,.xls"
            multiple={false}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <p>Drop a file here</p>
          <p className="note">
            <span>*</span>File supported .xlsx, .xls
          </p>
        </section>
        <section className="file-list">
          <h4>Uploaded file</h4>
          {fileName && (
            <section className="file-item">
              <section className="file-info">
                <span className="file-name">{fileName}</span>
              </section>
              <section className="file-actions">
                <button className="delete-btn" onClick={handleDelete}>
                  <Image
                    src={assets.ic_trash}
                    alt="delete"
                    width={30}
                    height={30}
                  />
                </button>
              </section>
            </section>
          )}
        </section>
      </section>
      <section className="footer-section">
        <button onClick={back}>Back</button>
        <button onClick={onClickToDashboard}>Go To Dashboard</button>
      </section>
    </Container>
  );
};

export default FileUpload;
