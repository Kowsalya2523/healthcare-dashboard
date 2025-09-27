"use client";

import assets from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "./style";
import { useRouter } from "next/navigation";
import { API_LOGIN } from "@/utils/api-constants";
import { ROUTE_DASHBOARD } from "@/utils/routes";
import { User } from "@/model/user";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await fetch(API_LOGIN);
      const users: User[] = await res.json();

      const foundUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (foundUser) {
        localStorage.setItem("userRole", foundUser.role);

        switch (foundUser.role) {
          case "admin":
            alert("Logged in as Admin");
            break;
          case "reviewer":
            alert("Logged in as Reviewer");
            break;
          case "viewer":
            alert("Logged in as Viewer");
            break;
          default:
            alert("Logged in");
        }

        push(ROUTE_DASHBOARD);
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Something went wrong, please try again!");
    }
  };

  return (
    <Container>
      <section className="card">
        <section className="left">
          <Image
            src={assets.img_hospital}
            alt="hospital"
            className="img-hospital"
          />
          <h2>MediTrack</h2>
          <p className="desc">
            Discover the power of personalized health insights and seamless
            tracking with MediTrack.
          </p>
        </section>
        <section className="right">
          <h2 className="title">Log in</h2>
          <input
            type="text"
            placeholder="User Name"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>
            Log in
          </button>
          {error && <p className="error">{error}</p>}
        </section>
      </section>
    </Container>
  );
};

export default LoginPage;
