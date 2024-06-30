import { footerSections } from "../data/footer";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-col">
            <h4>{section.title}</h4>
            <ul className="links">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <img
            src="https://www.e-baa.com/new/public/uploads/all/ytEkwT2zPwyfu10RDqHwNDLgZ9YFrfe9lC8h55jt.png"
            alt="Company Logo"
            className="footer-logo"
          />
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Your email"
              style={{ width: "260px" }}
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      {/* Payment Icons Section */}
      <div
        className="payment-icons text-center"
        style={{
          color: "white",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <i className="fab fa-cc-visa fa-3x" style={{ margin: "0 10px" }}></i>
        <i
          className="fab fa-cc-mastercard fa-3x"
          style={{ margin: "0 10px" }}
        ></i>
        <i className="fab fa-cc-amex fa-3x" style={{ margin: "0 10px" }}></i>
        <i
          className="fab fa-cc-discover fa-3x"
          style={{ margin: "0 10px" }}
        ></i>
      </div>
    </section>
  );
};

export default Footer;
