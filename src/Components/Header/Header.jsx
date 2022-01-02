import FeatherLogo from "../Svgs/FeatherLogo/FeatherLogo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <p className="ff-caveat fs-2 ff-bold brand-name">Sandy Krish</p>
          <FeatherLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
