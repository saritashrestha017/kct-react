import React from 'react'
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const handleAdd = () =>{
    // dispatch(addItemToCart());
  };
  const handleRemove = () =>{
    // dispatch(removeItemFromCart());
  };
const handleClear = () =>{
    // dispatch(clearItemToCart());
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src="https://img.drz.lazcdn.com/static/np/p/50f9f56fdc8981e775704eb3ef20cf39.jpg_720x720q80.jpg"
            alt="Product"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <h2 style={styles.title}>Wireless Headphones</h2>
          <p style={styles.price}>Rs. 3,500</p>
          <p style={styles.description}>
            High quality wireless headphones with noise cancellation, long
            battery life and premium sound.
          </p>
          <button style={styles.button} onClick={handleAdd}>Add to Cart</button>
          <button style={styles.button} onClick={handleRemove}>Remove Cart</button>
          <button style={styles.button} onClick={handleClear}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  card: {
    display: "flex",
    width: "700px",
    backgroundColor: "#fff",
    borderRadius: "14px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    padding: "20px",
  },

  imageWrapper: {
    width: "45%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    width: "55%",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    color: "#0E2C87",
  },

  price: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111",
  },

  description: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.5",
  },

  button: {
    marginTop: "auto",
    padding: "12px",
    backgroundColor: "#0E2C87",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  removebutton: {
    marginTop: "auto",
    padding: "12px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

