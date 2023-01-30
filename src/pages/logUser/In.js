import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JoinUs } from "../../Components";

const In = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      navigate("/me");
    }
  }, []);
  return <JoinUs />;
};

export default In;
