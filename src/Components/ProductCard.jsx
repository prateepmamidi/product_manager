export default function ProductCard({ product, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Delete product "${product.name}"?`);
    if (confirmDelete) {
      onDelete(product._id);
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
