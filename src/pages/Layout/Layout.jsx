import { useRef } from "react";
import fbIcon from "../../assets/icons/facebook.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import { Outlet, Link } from "react-router-dom";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import { useCurrentWidth } from "../../hooks/findWidth";
import woodGrain from "../../assets/woodGrain-unsplash.jpg";
import "./Layout.css";
import { useSideBarValue } from "../../context/SideBarContext";

export const loader = () => {
  return null;
};

export const Layout = () => {
  const width = useCurrentWidth();
  const currentSection = useRef();
  const sideBarValue = useSideBarValue();

  const asideContainerStyles = {
    backgroundImage: `URL(${woodGrain})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {width < 750 ? <MobileHeader /> : <DesktopHeader />}
      <div id="content-container" ref={currentSection}>
        <div className="--layout-aside-container" style={asideContainerStyles}>
          <div className="--layout-aside-content-container flex flex-column">
            <h2 className="--layout-current-nav white center">
              {sideBarValue}
            </h2>
            <div className="--layout-aside-social-container">
              <ul className="--layout-aside-social-list flex flex-column flex-center flex-align-center">
                <Link>
                  <li>
                    <img
                      className="social-icon fb"
                      src={fbIcon}
                      alt="facebook icon"
                    />
                  </li>
                </Link>
                <Link>
                  <li>
                    <img
                      className="social-icon insta"
                      src={instaIcon}
                      alt="instagram icon"
                    />
                  </li>
                </Link>
                <Link>
                  <li>
                    <img
                      className="social-icon tiktok"
                      src={tiktokIcon}
                      alt="tiktok icon"
                    />
                  </li>
                </Link>
                <Link>
                  <li>
                    <img
                      className="social-icon ytbe"
                      src={youtubeIcon}
                      alt="youtube icon"
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div id="scroll-container">
          <Outlet width={width} />
        </div>
      </div>
    </>
  );
};
