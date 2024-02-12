import React, { useState, useEffect } from "react";

// We're importing a component that we've defined in another file: Table.
import Table from "./Components/Table";

// We're importing some utility functions that we've defined in another file: addProduct, removeProduct, and editProduct.
import { addProduct, removeProduct, editProduct } from "./utils";

// We're importing some CSS styles that we've defined in another file: App.css.
import "./App.css";

// We're creating a new component called App. This component will be the main component of our application.
const App = () => {
  // We're using the useState hook to create a new state variable called products and a function to update it called setProducts. Initially, products is an empty array.
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  // Use useEffect to update localStorage when products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // We're creating an object called handlers. This object contains three functions: addProduct, removeProduct, and editProduct.
  // Each of these functions updates the products state variable by calling setProducts.
  const handlers = {
    addProduct: (newProduct) =>
      setProducts((prevProducts) => addProduct(newProduct, prevProducts)),
    removeProduct: (productId) =>
      setProducts((prevProducts) => removeProduct(productId, prevProducts)),
    editProduct: (updatedProduct) =>
      setProducts((prevProducts) => editProduct(updatedProduct, prevProducts)),
  };

  // We're returning the Table component. We're passing the products state variable and the handlers object to this component.
  return (
    <>
      <h1>CRUD App demo</h1>
      <Table products={products} {...handlers} />
    </>
  );
};

// We're making our component available to be used in other parts of our code.
export default App;
