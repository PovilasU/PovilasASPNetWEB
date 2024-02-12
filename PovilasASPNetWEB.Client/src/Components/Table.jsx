// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React from "react";

// We're also using components that we've defined in other files: AddProductRow, TableHeader, and ProductRows.
import AddProductRow from "./AddProductRow";
import TableHeader from "./TableHeader";
import ProductRows from "./ProductRows";

// We're creating a new component called Table. This component will be a table that displays a list of products.
// This component receives several pieces of information (we call these "props"):
// - products: an array of the products that we're displaying
// - addProduct: a function that we call when we want to add a new product
// - removeProduct: a function that we call when we want to remove a product
// - editProduct: a function that we call when we want to save our edits to a product
const Table = ({ products, addProduct, removeProduct, editProduct }) => (
  // We're creating a table.
  <table>
    {/* // Inside the table, we're creating a header by using the TableHeader component. */}
    <TableHeader />
    {/* // We're also creating a body for our table. */}
    <tbody>
      {/* // Inside the body, we're creating a row for adding new products by using the AddProductRow component.
      // We're passing the addProduct function to this component. */}
      <AddProductRow addProduct={addProduct} />
      {/* // We're also creating several rows for our products by using the ProductRows component.
      // We're passing the array of products and the functions for removing and editing products to this component. */}
      <ProductRows
        products={products}
        removeProduct={removeProduct}
        editProduct={editProduct}
      />
    </tbody>
  </table>
);
// We're making our component available to be used in other parts of our code.
export default Table;
