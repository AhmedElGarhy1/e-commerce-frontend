import React, { useState } from "react";
import { useAlertContext } from "./useAlertContext";
const useRequest = () => {
  const { setMessage } = useAlertContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const makeRequest = (
    fun,
    thenFun,
    isDataInCallBack,
    isThenMessage,
    isCatchMessage
  ) => {
    setIsLoading(true);
    setIsError(false);
    console.log(isLoading);
    console.log(isError);
    fun
      .then((res) => {
        if (!res.ok) throw Error(res.msg);
        isThenMessage && setMessage(res.msg);
        setIsLoading(false);
        thenFun(isDataInCallBack && res.data);
      })
      .catch((err) => {
        setIsError(true);
        isCatchMessage && setMessage(err.message);
        setIsLoading(false);
      });
  };
  return { isError, isLoading, makeRequest };
};

export default useRequest;
