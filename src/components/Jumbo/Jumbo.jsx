import Lottie from "lottie-react";
import Home3D from "../../assets/home3d.json";
import useSideBarObserver from "../../hooks/useSideBarObserver";
import "./Jumbo.css";

const Jumbo = () => {
  const subscribe = useSideBarObserver("Home");

  return (
    <section ref={subscribe} id="Home" className="--layout-jumbo-section">
      <Lottie
        id="jumbo-anim"
        className="--layout-jumbo-anim"
        animationData={Home3D}
        loop={true}
      />
      <h2 className="--layout-jumbo-title">
        Quality Renovations for LARGE & small Homes
      </h2>
      <p className="--layout-jumbo-text">
        Revamp your living space with our exceptional home renovation services.
        We deliver functional and stylish results that increase your property
        value. Let&apos;s bring your vision to life!
      </p>
    </section>
  );
};

export default Jumbo;
