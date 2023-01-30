import React, { useState, createContext, useRef, useEffect } from "react";
export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  // restart animation
  console.log(message);

  return (
    <AlertContext.Provider value={{ setMessage, message }}>
      {children}
    </AlertContext.Provider>
  );
};
