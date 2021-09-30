import React from "react";
import { useStateValue } from "../StateProvider";

import "../styles/checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="chekout">
      {cart?.length === 0 ? (
        <div>
          <h2 className="checkout_title">Your Shopping Cart Is Empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              brand={item.brand}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      )}
      <div>
        {cart.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
