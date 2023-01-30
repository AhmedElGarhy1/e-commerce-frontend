import axios from "axios";

// const baseUrl = process.env.API_RUL || "https://aroma-store.herokuapp.com";

const baseUrl = "http://localhost:8000";
const backendReq = async (url, method, obj, token) => {
  const options = {
    method,
    // url,
    url: baseUrl + url,
    data: obj,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
  return await axios(options)
    .then((res) => {
      return { ...res.data, ok: true };
    })
    .catch((err) => {
      return { msg: err.response.data.msg, ok: false };
    });
};

export { backendReq };
