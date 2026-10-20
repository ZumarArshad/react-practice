import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside className="cart-panel" aria-label="Shopping cart">
      <div className="cart-header">
        <div>
          <p className="section-label">Basket</p>
          <h2>Shopping Cart</h2>
        </div>
        <span className="cart-badge">{totalItems} items</span>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-list">
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item">
              <div className="cart-item-copy">
                <h3>{item.name}</h3>
                <p>${item.price} each</p>
              </div>

              <div className="item-controls">
                <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <span>Total</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>
    </aside>
  );
}

