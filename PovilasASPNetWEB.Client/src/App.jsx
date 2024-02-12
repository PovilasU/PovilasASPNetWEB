import React, { useState, useEffect } from "react";
import Table from "./Components/Table";
import {
  addProduct,
  removeProduct,
  editProduct,
  loadProductsFromLocalStorage,
} from "./utils";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    const url = "https://localhost:7020/api/Products";

    try {
      new URL(url);
    } catch (_) {
      console.error("Invalid URL");
      loadProductsFromLocalStorage();
      return;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error:", error);
        loadProductsFromLocalStorage();
      });
  }, []);

  const handlers = {
    addProduct: (newProduct) =>
      setProducts((prevProducts) => addProduct(newProduct, prevProducts)),
    removeProduct: (productId) =>
      setProducts((prevProducts) => removeProduct(productId, prevProducts)),
    editProduct: (updatedProduct) =>
      setProducts((prevProducts) => editProduct(updatedProduct, prevProducts)),
  };

  return (
    <>
      <h1>CRUD App demo</h1>
      <Table products={products} {...handlers} />
    </>
  );
};

export default App;
