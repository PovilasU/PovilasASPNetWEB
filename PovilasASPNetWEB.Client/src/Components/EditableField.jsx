// We're using a tool called React, which lets us build parts of a webpage (like buttons or forms) as separate pieces called components.
import React from "react";

// We're creating a new component called EditableField. This component will be a part of a table where we can display or edit a value.
// This component receives several pieces of information (we call these "props"):
// - isEditing: a true/false value that tells us whether we're in editing mode or not
// - field: the name of the field we're displaying or editing
// - value: the current value of the field
// - onChange: a function that we call when the value changes
const EditableField = ({ isEditing, field, value, onChange }) => (
  // We're creating a cell in a table.
  <td>
    {/* We're checking if we're in editing mode. */}
    {isEditing ? (
      // If we are in editing mode, we're creating a text box where we can type in a new value.
      // The text box starts with the current value already filled in.
      // When we type something in the text box, we're calling the onChange function to update the value.
      <input value={value} onChange={(e) => onChange(field, e.target.value)} />
    ) : (
      // If we're not in editing mode, we're just displaying the current value.
      value
    )}
  </td>
);

// We're making our component available to be used in other parts of our code.
export default EditableField;
