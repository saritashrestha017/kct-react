import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { addItemToCart, removeItemFromCart } from "../redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productData = useSelector((state) => state.product.items);
  console.log(productData);

  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem)

  return (
    <div style={styles.grid}>
      {productData?.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.thumbnail} alt={item.title} style={styles.image} />

          <div style={styles.content}>
            <h3 style={styles.title}>Name: {item.title}</h3>
            <p style={styles.category}>Category: {item.category}</p>
            <p style={styles.brand}>Brand: {item.brand}</p>
            <p style={styles.stock}>Stock: {item.stock}</p>
            <p style={styles.price}>Price: ${item.price.toFixed(2)}</p>
            <p style={styles.rating}>Rating: {item.rating}</p>
            {cartItem.find((cart)=>cart.id===item.id)?(
              <button
                style={styles.button}
                onClick={() => dispatch(removeItemFromCart(item))}
              >
                Remove to Cart
              </button>
            ):(
              <button
                style={styles.button}
                onClick={() => dispatch(addItemToCart(item))}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "30px 50px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    background: "#f8f8f8",
  },

  content: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#000",
    margin: 0,
  },

  category: {
    fontSize: "16px",
    margin: 0,
    color: "#000",
  },

  brand: {
    fontSize: "16px",
    margin: 0,
    color: "#000",
  },

  stock: {
    fontSize: "16px",
    margin: 0,
    color: "#000",
  },

  price: {
    fontSize: "18px",
    fontWeight: "700",
    margin: "6px 0 0 0",
    color: "blue",
  },

  rating: {
    fontSize: "16px",
    margin: 0,
    color: "orange",
  },

  button: {
    marginTop: "12px",
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
