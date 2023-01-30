import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  return context;
};
