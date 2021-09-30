import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Nav() {
  const [{ cart }] = useStateValue();
  console.log(cart);
  return (
    <>
      <nav>
        <div className="nav_container">
          <div className="left">
            <Link to="/">
              <h1 className="logo">Shoe Point.</h1>
            </Link>
          </div>
          <div className="center">
            <div className="search_con">
              <input
                type="text"
                placeholder="    Search...."
                className="search_input"
              />
              <div className="search_icon">
                .<i className="fa fa-search "></i>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="menu_item">Register</div>
            <div className="menu_item">Log in</div>
            <Link to="/checkout">
              <div className="menu_item cart-1" to="/checkout">
                <i className="fa fa-shopping-basket"></i>
                <span className="cart_count">{cart?.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
