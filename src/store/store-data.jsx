import React, { createContext, useContext, useState } from 'react';

// Create a context for managing product-related state and functions
export const ProductContext = createContext({
  entry: [],
  productList: () => {},
  deleteProduct: () => {},
});

// Custom hook to consume the ProductContext in functional components
export const useProductContext = () => useContext(ProductContext);

// Context provider to manage the product-related state and functions
const ProductContextProvider = ({ children }) => {
  // State to hold the list of products
  const [entry, setEntry] = useState([]);

  // Function to add a new product to the list
  const productList = (id, name, price, category) => {
    console.log(`id ${id} name ${name}  price ${price} category ${category}`);
    const newEntry = [...entry, { Id: id, Name: name, Price: price, Category: category }];
    setEntry(newEntry);
  };

  // Function to delete a product from the list
  const deleteProduct = (Id) => {
    const newEntry = entry.filter((item) => item.Id !== Id);
    setEntry(newEntry);
  };

  // Provide the state and functions through the context value
  return (
    <ProductContext.Provider
      value={{
        entry,
        productList,
        deleteProduct,
      }}
    >
      {/* Render the child components */}
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;