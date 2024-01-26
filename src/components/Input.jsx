import React, { useState } from 'react';
import { useProductContext } from '../store/store-data';

// Component for user input to add new products
const Input = () => {
  // Consume the ProductContext using the useProductContext hook
  const { productList } = useProductContext();

  // State variables to manage input fields
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  // Event handlers for updating state based on user input
  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Event handler for adding a new product
  const onAddClick = (event) => {
    event.preventDefault();
    productList(id, name, price, category);
    // Clear input fields after adding a product
    setId('');
    setName('');
    setPrice('');
    setCategory('');
  };

  // Render the input form
  return (
    <form className="container text-center m-5">
      <div className="row">
        {/* Input fields for product details */}
        <div className="col">
          <label>
            <input type="number" placeholder="id no--" onChange={handleId} value={id} />
          </label>
        </div>
        <div className="col">
          <label>
            <input type="text" placeholder="enter your product name" onChange={handleName} value={name} />
          </label>
        </div>
        <div className="col">
          <label>
            <input type="number" placeholder="selling price" onChange={handlePrice} value={price} />
          </label>
        </div>
        <div className="col">
          <label>
            {/* Dropdown for selecting product category */}
            <select onChange={handleCategoryChange} value={category}>
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="study">Study</option>
              <option value="shopping">Shopping</option>
            </select>
          </label>
        </div>
        <div className="col">
          {/* Button to add a new product */}
          <button className='btn btn-success' onClick={onAddClick} >Add Product</button>
        </div>
      </div>
    </form>
  );
};

export default Input;