// app/dashboard/page.js
"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("authenticated");

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      router.push("/login");
    }
  }, [router]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === "lost") {
      // Navigate to the About page
      router.push("/about");
    } else if (option === "found") {
      // Navigate to the Contact page
      router.push("/contact");
    } else if (option === "claim") {
      // Navigate to the Claim page (you can create a page for claiming items)
      router.push("/claim");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Lost and Found</h1>
      <div style={styles.optionsContainer}>
        <div
          style={styles.optionCard}
          onClick={() => handleOptionClick("lost")}
        >
          <h2 style={styles.optionText}>Lost Item</h2>
        </div>
        <div
          style={styles.optionCard}
          onClick={() => handleOptionClick("found")}
        >
          <h2 style={styles.optionText}>Found Item</h2>
        </div>
        <div
          style={styles.optionCard}
          onClick={() => handleOptionClick("claim")}
        >
          <h2 style={styles.optionText}>Claim Item</h2>
        </div>
      </div>
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
  optionsContainer: {
    display: "flex",
    gap: "2rem",
  },
  optionCard: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    textAlign: "center",
    transition: "transform 0.2s",
    width: "200px",
  },
  optionText: {
    fontSize: "1.5rem",
    color: "#4CAF50",
  },
};

// Adding hover effect for the option cards
styles.optionCard["&:hover"] = {
  transform: "scale(1.05)",
};
