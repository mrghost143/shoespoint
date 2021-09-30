import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length}: items) : <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={5}
        value={getCartTotal(cart)}
        displayType={"text"}
        //
        suffix={" Rs"}
      />
    </div>
  );
}

export default Subtotal;
