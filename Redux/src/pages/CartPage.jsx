
import { Cart } from "../components/Cart";

export default function CartPage() {
  return (
    <main className="page-content">
      <header className="page-header">
        <p className="eyebrow">Your order</p>
        <h1>Shopping Cart</h1>
        <p>Review your items and update quantities before checkout.</p>
      </header>

      <div className="cart-page-layout">
        <Cart />
      </div>
    </main>
  );
}
