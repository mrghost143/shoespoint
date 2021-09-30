import { useStateValue } from "../StateProvider";
import "../styles/product.css";

const Product = ({ item }) => {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // adding to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: item.id,
        title: item.title,
        brand: item.brand,
        img: item.img,
        price: item.price,
      },
    });
  };
  return (
    <>
      <div className="product_con">
        <img src={item.img} alt="item product" className="prod_img" />
        <div className="info">
          <h1 className="brand">{item.brand}</h1>
          <h1 className="title">{item.title}</h1>
          <span className="price">
            Price
            <small> Rs </small>
            <strong>{item.price}</strong>
          </span>
        </div>
        <div className="bottom">
          <div className="cart" onClick={addToCart}>
            Add to cart
          </div>

          <div className="view">View</div>
        </div>
      </div>
    </>
  );
};

export default Product;
