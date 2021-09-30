import "../styles/productlist.css";

import Nav from "../components/Nav";
import Products from "../components/Products";

import Letter from "../components/Letter";
import Footer from "../components/Footer";

export default function ProductList() {
  return (
    <div className="productlist">
      <Nav />
      <h1 className="filter_title">Shoes</h1>
      <div className="filter_con">
        <div className="filter">
          <span className="filter_text">Filter Products :</span>
          <select>
            <option value="sports" disabled selected>
              Type
            </option>
            <option value="converse">Converse</option>
            <option value="lowtop">Low Top</option>
            <option value="hightop">High Top</option>
            <option value="formal">Formal</option>
          </select>

          <select>
            <option disabled selected>
              Size
            </option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>

        <div className="filter">
          <span className="filter_text">Sort Products :</span>
          <select>
            <option selected>Newest</option>
            <option>Price from high to low </option>
            <option>Price from low -high</option>
          </select>
        </div>
      </div>
      <Products />
      <Letter />
      <Footer />
    </div>
  );
}
