import React, { useEffect, useState } from 'react';
import './App.css'; 


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
}


function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const processedProducts = products
    .map(product => ({
      ...product,
      price: product.price * 0.2,
    }))
    .filter(product => product.rating.rate > 4.0);

  return (
    <div className="app">
      <h1 class="heading">FakeStore Products</h1>
      <ProductList products={processedProducts} />
    </div>
  );
}

export default App;
