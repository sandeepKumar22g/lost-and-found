// app/claim/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClaimPage() {
  const router = useRouter();
  const [enteredId, setEnteredId] = useState("");
  const [message, setMessage] = useState("");

  const handleClaimItem = () => {
    const correctId = "1234"; // Static item ID

    if (enteredId === correctId) {
      setMessage("ID matched. Happy for you!");
    } else {
      setMessage("ID not matched.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Claim Item</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter Item ID"
          value={enteredId}
          onChange={(e) => setEnteredId(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleClaimItem} style={styles.button}>
          Claim Item
        </button>
      </div>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "2rem",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "250px",
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
  message: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#333",
  },
};

// Adding hover effect for the button
styles.button["&:hover"] = {
  backgroundColor: "#45a049",
};
