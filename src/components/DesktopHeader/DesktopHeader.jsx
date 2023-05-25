import { Link } from "react-router-dom";
import { genericHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import woodGrain from "../../assets/woodGrain-unsplash.jpg";
import "./DesktopHeader.css";

const HashLink = genericHashLink(Link);

const DesktopHeader = () => {
  const logoContainerStyles = {
    backgroundImage: `URL(${woodGrain})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className="--header-elem">
      <div className="--header-sticky-container flex flex-align-center">
        <div
          className="--header-logo-container desktop flex flex-align-center"
          style={logoContainerStyles}
        >
          <Link to="/">
            <img id="header-logo" className="--header-logo" src={Logo} alt="" />
          </Link>
          <ul className="--header-nav-ul desktop flex">
            <HashLink to="/#Home" className="link desktop">
              <li>Home</li>
            </HashLink>
            <HashLink to="/#AboutUs" className="link desktop">
              <li>AboutUs</li>
            </HashLink>
            <HashLink to="/#OurWork" className="link desktop">
              <li>Our Work</li>
            </HashLink>
            <HashLink to="/#Feedback" className="link desktop">
              <li>Feedback</li>
            </HashLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
