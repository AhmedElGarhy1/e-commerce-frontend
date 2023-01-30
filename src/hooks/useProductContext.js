import { useContext } from "react";
import { ProductContext } from "../contexts/ProductsContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  return context;
};
