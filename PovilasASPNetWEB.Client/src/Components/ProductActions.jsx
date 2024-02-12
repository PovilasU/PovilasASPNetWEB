// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React from "react";

// We're creating a new component called ProductActions. This component will be a part of a table where we can display buttons for actions.
// This component receives two pieces of information (we call these "props"):
// - onSave: a function that we call when the "Update Product" button is clicked
// - onCancel: a function that we call when the "Cancel" button is clicked
const ProductActions = ({ onSave, onCancel }) => (
  // We're creating a cell in a table.
  <td>
    {/* // Inside the cell, we're creating a button that says "Update Product". //
    When we click this button, we're calling the onSave function. */}
    <button onClick={onSave}>Update Product</button>
    {/* // We're also creating a button that says "Cancel". // When we click this
    button, we're calling the onCancel function. */}
    <button onClick={onCancel}>Cancel</button>
  </td>
);

// We're making our component available to be used in other parts of our code.
export default ProductActions;
