"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3500,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "14px",
        },
        success: {
          style: {
            background: "#22c55e",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
        },
      }}
    />
  );
}
