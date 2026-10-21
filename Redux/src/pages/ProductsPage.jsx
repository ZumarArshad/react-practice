import { ProductList } from "../components/ProductList";

export default function ProductsPage() {
  return (
    <main className="page-content">
      <header className="page-header">
        <p className="eyebrow">Discover our collection</p>
        <h1>Our Products</h1>
      </header>

      <div className="shop-layout">
        <ProductList />
      </div>
    </main>
  );
}