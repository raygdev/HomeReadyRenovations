import { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import useObserver from "../../hooks/useObserver";
import { useSideBarDispatch } from "../../context/SideBarContext";
import "./Testimonial.css";

const Testimonial = () => {
  const feedbackRef = useRef(null);
  const setSideBarValue = useSideBarDispatch();
  useObserver(feedbackRef, (isIntersecting) => {
    isIntersecting && setSideBarValue("Testimonials");
  });

  return (
    <section
      ref={feedbackRef}
      id="Feedback"
      className="--testimonial-section-container "
    >
      <h2 className="--testimonial-tagline black bold center">
        Testimonials speak volumes. They fuel our passion for delivering
        exceptional home renovations.
      </h2>
      <div className="--testimonial-carousel-container">
        <Carousel>
          <Carousel.Item>
            <p>
              Their construction company exceeded all expectations, delivering
              impeccable craftsmanship, outstanding service, and a truly
              remarkable experience.
            </p>
            <Carousel.Caption>
              <h3>-Bob and Sally</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Their construction company exceeded all expectations, delivering
              impeccable craftsmanship, outstanding service, and a truly
              remarkable experience.
            </p>
            <Carousel.Caption>
              <h3>-Bob and Sally</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Their construction company exceeded all expectations, delivering
              impeccable craftsmanship, outstanding service, and a truly
              remarkable experience.
            </p>
            <Carousel.Caption>
              <h3>-Bob and Sally</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
