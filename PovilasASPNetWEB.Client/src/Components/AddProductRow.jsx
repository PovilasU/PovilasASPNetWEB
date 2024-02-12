// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React, { useState } from "react";

// We're also using some helper functions that we've defined in another file.
import { handleInputChange, handleAddProduct } from "../utils";

// We're creating a new component called AddProductRow. This component will be a row in a table where we can add a new product.
const AddProductRow = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    link: "",
  });

  // We're telling our component what it should look like on the webpage.
  return (
    // We're creating a row in a table.
    <tr>
      {/* For each detail of our product (name, description, link)... */}
      {["name", "description", "link"].map((field) => (
        // We're creating a cell in the table.
        <td key={field}>
          {/* We're creating a text box where we can type in the detail. */}
          <input
            name={field}
            value={newProduct[field]}
            // When we type something in the text box, we're calling a function that updates the memory of our component with the new detail.
            onChange={(event) =>
              handleInputChange(event, newProduct, setNewProduct)
            }
          />
        </td>
      ))}
      {/* We're creating another cell in the table with a button in it. */}
      <td>
        <button
          // When we click the button, we're calling a function that adds the new product to a list of products.
          onClick={(event) =>
            handleAddProduct(event, newProduct, addProduct, setNewProduct)
          }
        >
          Add
        </button>
        <button
          // When we click the "Clear Fields" button, we're calling a function that resets the newProduct state.
          onClick={() =>
            setNewProduct({
              name: "",
              description: "",
              link: "",
            })
          }
        >
          &nbsp;Clear&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </td>
    </tr>
  );
};

// We're making our component available to be used in other parts of our code.
export default AddProductRow;
