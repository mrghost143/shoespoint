import { productDetail } from "../data";
import "../styles/products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_con">
        {productDetail.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
