import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import img1 from "../../wa photos/1.jpg";
import img2 from "../../wa photos/2.jpg";
import img3 from "../../wa photos/red1.jpg";
import img4 from "../../wa photos/4.jpg";
import img5 from "../../wa photos/5.jpg";
import img6 from "../../wa photos/6 red.jpg";
import img7 from "../../wa photos/7.jpg";
import img8 from "../../wa photos/8.jpg";
import img9 from "../../wa photos/9 red.jpg";
import img10 from "../../wa photos/10.jpg";
function HomePage() {
  return (
    <div>
      <Header />

      <div className="homepage">
        <Carousel className="control">
          <Carousel.Item>
            <img className="first-slide-2 " src={img2} alt="First slide" />
            <img className="first-slide-1 " src={img1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="first-slide-2 " src={img4} alt="First slide" />
            <img className="first-slide-1 " src={img6} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="first-slide-2 " src={img5} alt="First slide" />
            <img className="first-slide-1 " src={img1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="first-slide-2 " src={img8} alt="First slide" />
            <img className="first-slide-1 " src={img9} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="first-slide-2 " src={img7} alt="First slide" />
            <img className="first-slide-1 " src={img3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
