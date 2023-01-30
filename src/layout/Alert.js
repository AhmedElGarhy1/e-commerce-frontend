import React, { useRef, useEffect } from "react";

import { useAlertContext } from "../hooks/useAlertContext";
const Alert = () => {
  const { message } = useAlertContext();
  const msgRef = useRef();
  useEffect(() => {
    if (msgRef.current) {
      const me = msgRef.current;
      msgRef.current.style.webkitAnimation = "none";
      setTimeout(() => {
        me.style.webkitAnimation = "";
      }, 10);
    }
  }, [message]);
  return (
    <div className="position-relative w-100" style={{ height: "57px" }}>
      {message && (
        <div ref={msgRef} className="message">
          {message}
        </div>
      )}
    </div>
  );
};

export default Alert;
