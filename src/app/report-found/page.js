// app/about/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FoundPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/found-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFormData({
          title: "",
          description: "",
          location: "",
          date: "",
          contact: "",
        });
      } else {
        setError(data.error || "Failed to submit found item.");
      }
    } catch (err) {
      setError("An error occurred while submitting.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Report Found Item</h1>
      
      {/* Report Lost Item Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Report found  Item</h2>
        <p style={styles.description}>
          Please provide details about the Found item. Be as specific as possible to help others identify it.
        </p>
      </div>
      
      {/* Item Details Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Item Details</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Item Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="location">Location Found</label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="date">Date Found</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="contact">Your Contact Info</label>
          <input
            id="contact"
            name="contact"
            type="text"
            value={formData.contact}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="description">Item Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Submit Found Item</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      </div>
      
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
  subHeader: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    color: "#4CAF50",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    width: "100%",
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
