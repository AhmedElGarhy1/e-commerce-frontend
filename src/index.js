import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContextProvider } from "./contexts/ProductsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AlertContextProvider } from "./contexts/AlertContext";
import { CartContextProvider } from "./contexts/CartContext";
import { FilterContextProvider } from "./contexts/FilterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AlertContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <FilterContextProvider>
              <App />
            </FilterContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </AlertContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
