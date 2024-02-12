// This line imports the React library, which is necessary for writing React components.
import React from "react";

// This is a functional component in React named TableHeader. It's a function that returns some JSX (JavaScript XML), which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.
const TableHeader = () => (
  // The component returns a table header element (<thead>), which is used in HTML to group the header content in a table.
  <thead>
    {/* // Inside the table header, there's a table row element (<tr>), which defines a row of cells in a table. */}
    <tr>
      {/* // Each <th> element defines a header cell in a table. The text between the opening and closing <th> tags becomes the header's content.
      // So, this table has three headers: "Name", "Description", and "Link". */}
      <th>Name</th>
      <th>Description</th>
      <th>Link</th>
    </tr>
  </thead>
);

// This line exports the TableHeader component, which allows it to be imported and used in other files.
export default TableHeader;
