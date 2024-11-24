// app/login/page.js
"use client";

import { apiFetch } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let formData = {email, password}

    try {
      const response = await apiFetch("/api/auth/login", "POST", formData);
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("user", JSON.stringify(response.user))
      router.push("/");
    } catch (error) {
      console.log(error, "err")
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          <p>Don't have account? <Link href={"/register"} style={{textDecoration: "underline", color: "green", fontWeight: "bold"}} >Create one</Link></p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "1.5rem",
    color: "#333",
    fontSize: "1.8rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};

// Adding hover effect for button
styles.button["&:hover"] = {
  backgroundColor: "#45a049",
};
