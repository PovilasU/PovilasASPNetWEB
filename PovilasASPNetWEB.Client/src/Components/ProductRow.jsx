// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React, { useState, useEffect } from "react";

// We're also using two components that we've defined in other files: EditableField and ActionButtons.
import EditableField from "./EditableField";
import ActionButtons from "./ActionButtons";

const ProductRow = ({ product, removeProduct, editProduct }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  // We're using a feature of React called "effects". This lets us run some code whenever certain values change.
  // In this case, whenever the product prop changes, we're updating our memory of the product that we're editing.
  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  // We're defining a function that we'll use to handle changes to the input fields.
  // This function takes a field and a value, and updates our memory of the product that we're editing.
  const handleInputChange = (field, value) => {
    setEditedProduct({ ...editedProduct, [field]: value });
  };

  // We're defining a function that we'll use to handle the "Save" button.
  // This function calls the editProduct function to save our edits, and then turns off editing mode.
  const handleSave = () => {
    editProduct(editedProduct);
    setIsEditing(false);
  };

  // We're defining the fields that our product has.
  const fields = ["name", "description", "link"];

  // We're telling our component what it should look like on the webpage.
  return (
    // We're creating a row in a table.
    <tr>
      {fields.map((field) => (
        <EditableField
          // The key prop is a special prop in React that helps it identify which items have changed, are added, or are removed. Here, it's value is the field name.
          key={field}
          // The isEditing prop is a boolean that tells the EditableField component whether the field is currently being edited.
          isEditing={isEditing}
          // The field prop is the name of the field that this EditableField component represents.
          field={field}
          // The value prop is the current value of the field. If the field is being edited, it's the value in the editedProduct object. If not, it's the value in the product object.
          value={isEditing ? editedProduct[field] : product[field]}
          // The onChange prop is a function that the EditableField component will call when the value of the field changes. This function is defined in the parent component and likely updates the value of the field in the editedProduct object.
          onChange={handleInputChange}
        />
      ))}
      {/* // The ActionButtons component is being used here. This component likely
      contains buttons for various actions related to a product. */}
      <ActionButtons
        // The isEditing prop is a boolean that tells the ActionButtons component whether the product is currently being edited.
        isEditing={isEditing}
        // The onSave prop is a function that the ActionButtons component will call when the save button is clicked. This function is defined in the parent component and likely saves the changes made to the product.
        onSave={handleSave}
        // The onCancel prop is a function that the ActionButtons component will call when the cancel button is clicked. This function sets the isEditing state to false, indicating that the user has cancelled the editing process.
        onCancel={() => setIsEditing(false)}
        // The onEdit prop is a function that the ActionButtons component will call when the edit button is clicked. This function sets the isEditing state to true, indicating that the user wants to edit the product.
        onEdit={() => setIsEditing(true)}
        // The onRemove prop is a function that the ActionButtons component will call when the remove button is clicked. This function calls the removeProduct function from the parent component with the product's id as an argument, indicating that the user wants to remove this product.
        onRemove={() => removeProduct(product.id)}
      />
    </tr>
  );
};

export default ProductRow;
