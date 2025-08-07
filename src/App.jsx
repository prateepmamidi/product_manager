import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductList from "./Components/ProductList";
import AddProductForm from "./Components/AddproductForm";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (product) => {
    await axios.post("http://localhost:5000/api/products", product);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <AddProductForm onAdd={handleAdd} />
      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
}

export default App;
