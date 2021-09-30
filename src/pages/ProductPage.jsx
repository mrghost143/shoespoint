import "../styles/productpage.css";
import Nav from "../components/Nav";
import Letter from "../components/Letter";
import Footer from "../components/Footer";

export default function ProductPage() {
  return (
    <div className="single_product">
      <Nav />
      <div className="wrapper">
        <div className="img_con">hiii am product</div>
      </div>
      <Letter />
      <Footer />
    </div>
  );
}
