
// This function adds a new product to the list of existing products.
// It assigns a unique id to the new product based on the current timestamp,
// then returns a new array that includes all the previous products and the new product.
export const addProduct = (newProduct, prevProducts) => {
  newProduct.id = Date.now();
  return [...prevProducts, newProduct];
};

// This function removes a product from the list of existing products.
// It filters out the product with the given id, updates the products in local storage,
// and then returns the updated products array.
export const removeProduct = (productId, prevProducts) => {
  const updatedProducts = prevProducts.filter(product => product.id !== productId);
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  return updatedProducts;
};

// This function edits an existing product in the list of products.
// It maps over the previous products and replaces the product with the given id with the updated product.
export const editProduct = (updatedProduct, prevProducts) =>
  prevProducts.map(product => product.id === updatedProduct.id ? updatedProduct : product);

// This function handles the change event for an input field.
// It updates the newProduct object with the new value of the input field.
export const handleInputChange = (event, newProduct, setNewProduct) => {
  setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
};

// This function handles the submit event for the add product form.
// It prevents the default form submission, checks if all the required fields are filled,
// adds the new product to the list of products, and resets the newProduct object.
export const handleAddProduct = (event, newProduct, addProduct, setNewProduct) => {
  event.preventDefault();
  const fields = ["name", "description", "link"];
  for (let field of fields) {
    if (!newProduct[field]) {
      alert(`${field.charAt(0).toUpperCase() + field.slice(1)} field is required!`);
      return;
    }
  }
  addProduct(newProduct);
  setNewProduct({ name: "", description: "", link: "" });
};



// This function fetches products from an API using the async/await syntax.
export const fetchProductsWithAsyncAwait = async () => {
  try {
    // The fetch function is used to send a request to the API.
    const response = await fetch('https://api.example.com/products');

    // If the response is not ok (status code is not in the range 200-299), an error is thrown.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // The response from the API is in JSON format, so it's converted to a JavaScript object using the json method.
    const products = await response.json();

    // The products are returned from the function.
    return products;
  } catch (error) {
    // If an error occurs (either when sending the request, receiving the response, or converting the response to a JavaScript object), it's logged to the console and an empty array is returned.
    console.error('Fetching products failed: ', error);
    return [];
  }
};


// This function fetches products from an API using the Promise syntax.
export const fetchProductsWithPromises = () => {
  return fetch('https://api.example.com/products')
    .then(response => {
      // If the response is not ok (status code is not in the range 200-299), an error is thrown.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // The response from the API is in JSON format, so it's converted to a JavaScript object using the json method.
      return response.json();
    })
    .catch(error => {
      // If an error occurs (either when sending the request, receiving the response, or converting the response to a JavaScript object), it's logged to the console and an empty array is returned.
      console.error('Fetching products failed: ', error);
      return [];
    });
};