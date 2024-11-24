// app/about/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const [queryData, setQueryData] = useState({
    title: "",
    description: "",
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);
    try {
      const response = await fetch("/api/lost-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryData),
      });

      const data = await response.json();
      if (response.ok) {
        setResults(data);
      } else {
        setError(data.error || "Failed to fetch results.");
      }
    } catch (err) {
      setError("An error occurred while querying.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Find Lost Item</h1>
      
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Find Lost Item</h2>
        <p style={styles.description}>
          Please provide details about the lost item. Be as specific as possible to help others identify it.
        </p>
      </div>
      <div style={styles.section}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="description">Item Title</label>
        <input
          name="title"
          value={queryData.title}
          onChange={handleChange}
          placeholder="Enter title"
          style={styles.input}
        />
        <br />
        <br />
        <label htmlFor="description">Item Description</label>
        <textarea
          name="description"
          value={queryData.description}
          onChange={handleChange}
          placeholder="Enter description"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Search Lost Items</button>
      </form>

      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results.length > 0 && (
        <div>
          {results.map((item) => (
            <div style={styles.section} key={item._id}>

              <h1>Item title: {item.title}</h1> 
              <p><b><i>Item description:</i></b> {item.description}</p>
              <p><b><i>Item location:</i></b> {item.location}</p>
              <p><b><i>Item found by:</i></b> {item.contact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    color: "#333",
  },
  section: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
  },
  subHeader: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    color: "#4CAF50",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    resize: "vertical",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};

// Adding hover effect for the button
styles.button["&:hover"] = {
  backgroundColor: "#45a049",
};
