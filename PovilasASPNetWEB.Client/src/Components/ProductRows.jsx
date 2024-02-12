import React from "react";
import ProductRow from "./ProductRow";

const ProductRows = ({ products = [], removeProduct, editProduct }) => {
  if (!Array.isArray(products)) {
    console.error("products is not an array");
    return null;
  }

  return (
    <>
      {products.map((product, index) => (
        <ProductRow
          key={index}
          product={product}
          removeProduct={removeProduct}
          editProduct={editProduct}
        />
      ))}
    </>
  );
};

export default ProductRows;
