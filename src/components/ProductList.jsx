import React from 'react';
import { useProductContext } from '../store/store-data';
import PrintProduct from './PrintProduct';

// Component to display the list of products
const ProductList = () => {
  // Consume the ProductContext using the useProductContext hook
  const { entry, deleteProduct } = useProductContext();

  return (
    <div className="container">
      {/* Map through the list of products and render each product using the PrintProduct component */}
      {entry.map((item) => (
        <PrintProduct key={item.Id} Id={item.Id} Name={item.Name} Price={item.Price} Category={item.Category} onDeleteClick={() => deleteProduct(item.Id)} />
      ))}
    </div>
  );
};

export default ProductList;