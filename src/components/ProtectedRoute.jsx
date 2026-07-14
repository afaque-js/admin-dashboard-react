import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("http://localhost:5000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          localStorage.removeItem("token");
          setIsVerified(false);
        } else {
          setIsVerified(true);
        }
      })
      .catch((error) => {
        console.error("Error verifying token:", error);
        setIsVerified(false);
      });
  }, [token]);

  if (!token || isVerified === false) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
