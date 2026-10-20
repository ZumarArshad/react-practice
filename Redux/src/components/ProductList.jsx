import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export function ProductList() {
  const dispatch = useDispatch();

  const product = {
    id: 1,
    name: "Noise Cancelling Headphones",
    price: 50,
  };

  return (
    <section className="product-list" aria-label="Product list">
      <div className="section-heading">
        <p className="section-label">Featured item</p>
        <h2>Product List</h2>
      </div>

      <div className="product-card">
        <div className="product-visual" aria-hidden="true">🎧</div>

        <div className="product-copy">
          <h3>{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-description">
            Premium sound, all-day comfort, and powerful wireless performance.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
