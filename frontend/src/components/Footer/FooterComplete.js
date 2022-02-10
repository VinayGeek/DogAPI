import FooterSocial from "./FooterSocial";
import FooterDetails from "./FooterDetails";
import "./Footer.css";

const FooterComplete = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <FooterDetails />
            <FooterSocial />
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComplete;
