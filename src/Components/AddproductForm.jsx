import { useState } from "react";
import "./Addproduct.css";
// Optional: style for the form
export default function AddProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, description, category } = form;

    if (!name || !price || !description || !category) {
      setError("All fields are required.");
      return;
    }

    const formattedProduct = {
      name,
      price: parseFloat(price),
      description,
      category
    };

    onAdd(formattedProduct);
    setForm({ name: "", price: "", description: "", category: "" });
    setError("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>

      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          id="name"
          name="name"
          placeholder="e.g. iPhone 14"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($):</label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="e.g. 799"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          placeholder="e.g. Latest model with A15 chip"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          name="category"
          placeholder="e.g. Electronics"
          value={form.category}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">Add Product</button>
    </form>
  );
}
