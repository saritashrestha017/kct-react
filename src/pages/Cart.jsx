import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItemFromCart } from "../redux/slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const [cartData, setCartData] = useState(cartItem);
  const navigate = useNavigate();

  console.log(cartItem);

  useEffect(() => {
    setCartData(cartItem);
  }, [cartItem]);

  const managecartQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const updatedCartData = cartData.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    setCartData(updatedCartData);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    localStorage.clear();
    alert("Checkout successful! Your cart has been cleared.");
    navigate("/product");
  };

  return (
    <div style={styles.cartContainer}>
      <div style={styles.cartHeader}>
        <h2 style={styles.cartText}>Your Cart Items</h2>
        <span style={styles.cartLength}>{cartData.length} items</span>
      </div>

      {cartData.length > 0 ? (
        cartData.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <div style={styles.itemInfo}>
              <img src={item.thumbnail} alt="" style={styles.img} />
              <div style={styles.itemDetail}>
                <h4>{item.title}</h4>
                <p>{item.brand}</p>
              </div>
            </div>

            <div style={styles.itemActions}>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {
                    <input
                      type="number"
                      placeholder="Quantity"
                      style={{ margin: "15px" }}
                      onChange={(e) =>
                        managecartQuantity(item.id, e.target.value)
                      }
                    ></input>
                  }
                  <button
                    onClick={() =>
                      managecartQuantity(item.id, (item.quantity || 1) - 1)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity ? item.quantity : 1}</p>
                  <button
                    onClick={() =>
                      managecartQuantity(item.id, (item.quantity || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <span style={styles.price}>
                  ${(item.quantity ? item.price * item.quantity: item.price)}
                </span>
                <button
                  style={styles.removeBtn}
                  onClick={() => dispatch(removeItemFromCart(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h4>No any Items on cart</h4>
      )}

      <div style={styles.totalPrice}>
        Total Price: $
        {cartData
          .reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
          )
          .toFixed(4)}
      </div>

      <button onClick={handleCheckout} style={styles.removeBtn}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

const styles = {
  cartContainer: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    marginTop: "20px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #ccc",
  },
  cartText: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  cartLength: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
    borderBottom: "1px solid #ccc",
  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  img: {
    height: "100px",
    width: "100px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  itemActions: {
    textAlign: "right",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "block",
    color: "blue",
  },
  removeBtn: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "teal",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
  },
  totalPrice: {
    textAlign: "right",
    marginBottom: "20px",
    marginTop: "20px",
    fontWeight: "bold",
    color: "blue",
  },
};
