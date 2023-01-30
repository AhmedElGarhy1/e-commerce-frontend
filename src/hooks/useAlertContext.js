import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";

export const useAlertContext = () => {
  const { setMessage, message } = useContext(AlertContext);
  const setMessage1 = (msg) => {
    setMessage((prev) => {
      if (prev === msg) {
        return msg + " ";
      }
      return msg;
    });
  };
  return { setMessage: setMessage1, message };
};
