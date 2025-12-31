"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export default function Toaster() {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1e293b",
          color: "#f1f5f9",
          border: "2px solid #64ffda",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        },
        success: {
          iconTheme: {
            primary: "#64ffda",
            secondary: "#0a192f",
          },
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "2px solid #64ffda",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "2px solid #ef4444",
          },
        },
      }}
    />
  );
}
