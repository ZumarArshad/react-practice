import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="page-header">
        <p className="eyebrow">Your order</p>
        <h1>Shopping Cart</h1>
      </header>

      <main className="shop-layout">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;