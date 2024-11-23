// app/about/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const [itemDetails, setItemDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGenerateId = () => {
    // Trigger pop-up message
    alert("Submitted");

    // Navigate to the Dashboard page
    router.push("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Report Lost Item</h1>
      
      {/* Report Lost Item Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Report Lost Item</h2>
        <p style={styles.description}>
          Please provide details about the lost item. Be as specific as possible to help others identify it.
        </p>
      </div>
      
      {/* Item Details Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Item Details</h2>
        <textarea
          placeholder="Describe the lost item here..."
          value={itemDetails}
          onChange={(e) => setItemDetails(e.target.value)}
          style={styles.textarea}
        />
      </div>
      
      {/* Generate ID Button */}
      <div style={styles.buttonContainer}>
        <button onClick={handleGenerateId} style={styles.button}>
          Generate ID
        </button>
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
  textarea: {
    width: "100%",
    height: "100px",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "1rem",
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
