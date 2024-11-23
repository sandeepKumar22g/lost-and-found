// app/dashboard/page.js
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  // Check if the user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  const handleGoToLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    // Remove authentication and redirect to login
    localStorage.removeItem("authenticated");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dashboard</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleGoToLogin} style={styles.button}>
          Go to Login
        </button>
        <button onClick={handleLogout} style={{ ...styles.button, backgroundColor: "#FF4D4D" }}>
          Logout
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
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
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

// Adding hover effect for the buttons
styles.button["&:hover"] = {
  backgroundColor: "#45a049",
};
