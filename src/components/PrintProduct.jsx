import React from 'react';

// Component to display details of a single product and allow deletion
const PrintProduct = ({ Id, Name, Price, Category, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col"> ID:{Id}</div>
        <div className="col">Product-Name:{Name}</div>
        <div className="col">Price:{Price}</div>
        <div className="col">Category:{Category}</div>
        <div className="col">
          {/* Button to trigger the deletion of the product */}
          <button type="button" className="btn btn-danger" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintProduct;
