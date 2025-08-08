import ProductCard from "./ProductCard";
export default function ProductList({ products, onDelete }) {
  if (!Array.isArray(products)) {
    return <p>Loading products...</p>; 
  }

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
