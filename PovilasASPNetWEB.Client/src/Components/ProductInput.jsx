// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React from "react";

// We're creating a new component called ProductInput. This component will be a part of a table where we can display an input field.
// This component receives three pieces of information (we call these "props"):
// - name: the name of the input field
// - value: the current value of the input field
// - onChange: a function that we call when the value of the input field changes
const ProductInput = ({ name, value, onChange }) => (
  // We're creating a cell in a table.
  <td>
    {/* // Inside the cell, we're creating an input field of type "text".
    // The input field has a name and a value, and when the value changes, we call the onChange function. */}
    <input type="text" name={name} value={value} onChange={onChange} />
  </td>
);

// We're making our component available to be used in other parts of our code.
export default ProductInput;
