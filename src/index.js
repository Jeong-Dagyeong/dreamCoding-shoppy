import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import { ProductDetail } from "./pages/ProductDetail";
import GlobalStyle from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    paht: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "carts",
        element: <MyCart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
