import { createContext, useEffect, useReducer, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { searchProducts } from "../middleware/get-api";
import { useProductContext } from "../hooks/useProductContext";

export const FilterContext = createContext();

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...state,
        categoryIds: action.payload,
      };
    case "PRICES":
      return {
        ...state,
        prices: action.payload,
      };
    case "MIN_RATE":
      return {
        ...state,
        minRate: action.payload,
      };
    case "QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export const FilterContextProvider = ({ children }) => {
  const { dispatch: dispatchProducts } = useProductContext();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(filterReducer, {
    categoryIds: [],
    prices: [],
    minRate: 0,
    query: "",
  });

  const debouncedFilters = useRef(
    debounce(async (state) => {
      setLoading(true);
      await searchProducts(state).then((res) => {
        setLoading(false);
        console.log(res);
        if (!res.ok) return console.log(res.msg);
        dispatchProducts({ type: "SET_PRODUCTS", payload: res.data });
      });
    }, 1000)
  ).current;

  useEffect(() => {
    debouncedFilters(state);
  }, [state]);

  return (
    <FilterContext.Provider value={{ loading, ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
