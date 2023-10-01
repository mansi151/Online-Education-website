import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage and then navigate to the Signin page
    localStorage.clear();
    navigate("/signin");
  }, [navigate]);

  return (
    <>
    </>
  );
};

export default Logout;
