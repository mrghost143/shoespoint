import "../styles/checkoutproduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, img, price, brand }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <>
      <div className="checkoutProduct">
        <img src={img} alt="img" />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_brand">{brand}</p>
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            Price
            <small> Rs </small>
            <strong>{price}</strong>
          </p>
          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
