
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="navbar">
          <Link to="/" className="nav-brand">
            My Store
          </Link>

          <Link to="/cart" className="nav-cart">
            Shopping Cart ({totalItems})
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ProductsPage />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
