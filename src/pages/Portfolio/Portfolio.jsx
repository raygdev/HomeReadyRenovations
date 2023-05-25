import Footer from "../../components/Footer/Footer";
import { getClass } from "../../utils/getClass.js";
import LogoWhite from "../../assets/LogoWhite.png";
import placeholder from "../../assets/placeholder.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="--portfolio-section-container flex flex-column">
      <main className="--portfolio-main">
        <h2 className="center"> Commercial Work</h2>
        <div
          id="commerical-container"
          className="--portfolio-commercial-container"
        >
          <div className={`${getClass(1)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(2)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(3)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(4)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(5)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(6)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(7)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(8)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(9)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(10)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
        </div>
        <h2 className="center">Interiors</h2>
        <div
          id="commerical-container"
          className="--portfolio-commercial-container"
        >
          <div className={`${getClass(8)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(3)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(9)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(2)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(4)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(7)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(1)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(6)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(10)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(5)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
        </div>
        <h2 className="center">Exteriors</h2>
        <div
          id="commerical-container"
          className="--portfolio-commercial-container"
        >
          <div className={`${getClass(10)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(9)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(8)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(7)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(6)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(5)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(4)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(3)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(2)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
          <div className={`${getClass(1)} image-container`}>
            <img src={placeholder} className="image-grid" />
          </div>
        </div>
      </main>
      <footer className="--layout-footer flex flex-column">
        <div className="--layout-footer-img-container flex flex-center">
          <img className="--footer-logo-img" src={LogoWhite} alt="" />
        </div>
        <Footer />
      </footer>
    </section>
  );
};

export default Portfolio;
