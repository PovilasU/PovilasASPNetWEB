// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React from "react";

// We're also using a component that we've defined in another file: ProductRow.
import ProductRow from "./ProductRow";

// We're creating a new component called ProductRows. This component will be a list of ProductRow components.
// This component receives several pieces of information (we call these "props"):
// - products: an array of the products that we're displaying
// - removeProduct: a function that we call when we want to remove a product
// - editProduct: a function that we call when we want to save our edits to a product
const ProductRows = ({ products, removeProduct, editProduct }) => (
  // We're using a feature of React called "fragments". This lets us return multiple elements from our component without having to wrap them in a div.
  <>
    {/* // We're going through each product in our array of products... */}
    {products.map((product, index) => (
      // ...and for each product, we're creating a ProductRow component.
      // We're passing several props to this component, including the product itself, and the functions to call when we want to remove or edit the product.
      <ProductRow
        key={index}
        product={product}
        removeProduct={removeProduct}
        editProduct={editProduct}
      />
    ))}
  </>
);

// We're making our component available to be used in other parts of our code.
export default ProductRows;
