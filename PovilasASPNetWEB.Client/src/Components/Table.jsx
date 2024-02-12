import React from "react";
import AddProductRow from "./AddProductRow";
import TableHeader from "./TableHeader";
import ProductRows from "./ProductRows";

const Table = ({ products = [], addProduct, removeProduct, editProduct }) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        <AddProductRow addProduct={addProduct} />
        <ProductRows
          products={products || []}
          removeProduct={removeProduct}
          editProduct={editProduct}
        />
      </tbody>
    </table>
  );
};

export default Table;
