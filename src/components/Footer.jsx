import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* left */}
        <div className="footer_left">
          <h1 className="footer_logo">Shoe Point.</h1>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
            labore voluptatem! Quo fuga, a inventore deleniti quibusdam
            consequatur accusantium rerum ducimus nesciunt magni sed ab officiis
          </p>
          <div className="socail_con">
            <div className="social_icon fb">
              <i class="fa fa-facebook-f"></i>
            </div>
            <div className="social_icon inst">
              <i class="fa fa-instagram"></i>
            </div>
            <div className="social_icon gmail">
              <i class="fa fa-envelope"></i>
            </div>
            <div className="social_icon whatsapp">
              <i class="fa fa-whatsapp"></i>
            </div>
          </div>
        </div>

        {/* center */}
        <div className="footer_center">
          <h1 className="link_title">Useful Links</h1>
          <ul>
            <li to="#top">
              <Link to="/">Home</Link>
            </li>

            <li>cart</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>About Us</li>
            <li>Singn Up</li>
          </ul>
        </div>

        {/* right */}

        <div className="footer_right">
          <h1 className="link_title">Contact</h1>
          <div className="contact">
            <i className="fa fa-map-pin"></i>702 Patankar , Mumbai 401203
          </div>
          <div className="contact">
            <i className="fa fa-phone"></i>+91 7757883117
          </div>
          <div className="contact">
            <i className="fa fa-envelope-open"></i>ankit143bisht@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
