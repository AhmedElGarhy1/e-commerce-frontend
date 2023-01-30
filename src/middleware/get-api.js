import { backendReq } from "./basicRequest";
// import Data from "../data/productsData";
// * -------------------------- user endpoints --------------------------
const createUser = async (obj) => {
  return await backendReq("/api/user/signup", "post", obj);
};
const logUser = async (obj) => {
  return await backendReq("/api/user/login", "post", obj);
};
const updateUserInfo = async (obj, token) => {
  return await backendReq("/api/user/info", "patch", obj, token);
};
const updateUserPassword = async (obj, token) => {
  return await backendReq("/api/user/pass", "patch", obj, token);
};

// *--------------------- products endpoints --------------------------
const getProduct = async (id, token) => {
  // api request
  return await backendReq(`/api/products/${id}`, "get", {}, token);
  // return productsData.find((data) => data._id === id);
};
const getAllProducts = async () => {
  // api request
  return await backendReq(`/api/products/`, "get");
  // return productsData;
};
const getAllCategories = async () => {
  return await backendReq("/api/category", "get");
};
// * -------------------------- cart endpoints --------------------------
const addToCart = async (obj, token) => {
  return await backendReq("/api/cart", "post", obj, token);
};
const getCartProducts = async (token) => {
  return await backendReq("/api/cart", "get", {}, token);
};
const updateCartProduct = async (obj, token) => {
  return await backendReq("/api/cart", "patch", obj, token);
};
const deleteCartProduct = async (obj, token) => {
  return await backendReq("/api/cart/product", "delete", obj, token);
};
const deleteAllCartProducts = async (token) => {
  return await backendReq("/api/cart", "delete", {}, token);
};

//* -------------------------- Search endpoints --------------------------
const searchProducts = async (obj) => {
  return await backendReq("/api/search", "post", obj);
};

export {
  createUser,
  logUser,
  getProduct,
  getAllProducts,
  addToCart,
  getCartProducts,
  updateCartProduct,
  deleteCartProduct,
  deleteAllCartProducts,
  updateUserInfo,
  updateUserPassword,
  getAllCategories,
  searchProducts,
};
