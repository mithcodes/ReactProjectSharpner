import React from 'react';
import Input from './components/Input';
import ProductList from './components/ProductList';
import ProductContextProvider from './store/store-data';

function App() {
  return (
    // Wrap the main components with the ProductContextProvider to provide the context to the components
    <ProductContextProvider>
      <div className="main-container">
        {/* Input component for adding new products */}
        <Input />
        {/* ProductList component for displaying the list of products */}
        <ProductList />
      </div>
    </ProductContextProvider>
  );
}

export default App;