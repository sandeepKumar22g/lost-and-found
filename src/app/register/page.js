"use client";

import { useState } from "react";
import { apiFetch } from "@/utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiFetch("/api/auth/register", "POST", formData);
      router.push("/");
    } catch (error) {
      console.log(error, "error")
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Register Here</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
        <p>Already have account? <Link style={{textDecoration: "underline", color: "green", fontWeight: "bold"}} href={"/login"}>Click here</Link></p>
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