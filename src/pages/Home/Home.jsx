import Jumbo from "../../components/Jumbo/Jumbo";
import AboutUs from "../../components/About/About";
import WorkMobile from "../../components/WorkMobile/WorkMobile";
import WorkDesktop from "../../components/WorkDesktop/WorkDesktop";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import LogoWhite from "../../assets/LogoWhite.png";

const Home = ({ width }) => {
  return (
    <div className="--layout-mainfooter-flex flex flex-column">
      <main className="--layout-main-container">
        <Jumbo />
        <AboutUs />
        <div id="OurWork">{width < 750 ? <WorkMobile /> : <WorkDesktop />}</div>
        <Testimonial />
      </main>
      <footer className="--layout-footer flex flex-column">
        <div className="--layout-footer-img-container flex flex-center">
          <img className="--footer-logo-img" src={LogoWhite} alt="" />
        </div>

        <Footer />
      </footer>
    </div>
  );
};

export default Home;
