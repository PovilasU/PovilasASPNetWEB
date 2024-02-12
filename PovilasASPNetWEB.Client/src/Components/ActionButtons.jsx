// Import the React library
import React from "react";

// Define the ActionButtons component. This component receives several props:
// - isEditing: a boolean indicating whether the row is in editing mode
// - onSave: a function to call when the "Save" button is clicked
// - onCancel: a function to call when the "Cancel" button is clicked
// - onEdit: a function to call when the "Edit" button is clicked
// - onRemove: a function to call when the "Remove" button is clicked
const ActionButtons = ({ isEditing, onSave, onCancel, onEdit, onRemove }) => (
  // Render a table cell
  <td>
    {/* If the row is in editing mode, render the "Save" and "Cancel" buttons */}
    {isEditing ? (
      <>
        {/* When the "Save" button is clicked, call the onSave function */}
        <button onClick={onSave}>Save</button>
        {/* When the "Cancel" button is clicked, call the onCancel function */}
        <button onClick={onCancel}>Cancel</button>
      </>
    ) : (
      // If the row is not in editing mode, render the "Edit" and "Remove" buttons
      <>
        {/* When the "Edit" button is clicked, call the onEdit function */}
        <button onClick={onEdit}>Edit</button>
        {/* When the "Remove" button is clicked, call the onRemove function */}
        <button onClick={onRemove}>Remove</button>
      </>
    )}
  </td>
);

// Export the ActionButtons component so it can be used in other files
export default ActionButtons;
