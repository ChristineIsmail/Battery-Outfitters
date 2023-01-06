import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./HomePage.css";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <div>
      <Header />

      <div className="homepage">
        <Carousel className="control">
          <Carousel.Item>
            <img
              className="first-slide-2 "
              src="truckk.jpg"
              alt="First slide"
            />
            <img
              className="first-slide-1 "
              src="pickup2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="ford.jpeg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="ford2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="i10.jpg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="i10 cropped.jpg"
              alt="Second slide"
            />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="first-slide-2 "
              src="truckk.jpg"
              alt="First slide"
            />
            <img
              className="first-slide-1 "
              src="pickup2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="ford.jpeg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="ford2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="i10.jpg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="i10 cropped.jpg"
              alt="Second slide"
            />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="first-slide-2 "
              src="truckk.jpg"
              alt="First slide"
            />
            <img
              className="first-slide-1 "
              src="pickup2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="ford.jpeg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="ford2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="i10.jpg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="i10 cropped.jpg"
              alt="Second slide"
            />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="first-slide-2 "
              src="truckk.jpg"
              alt="First slide"
            />
            <img
              className="first-slide-1 "
              src="pickup2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="ford.jpeg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="ford2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" second-slide-2 "
              src="i10.jpg"
              alt="Second slide"
            />
            <img
              className=" second-slide-1 "
              src="i10 cropped.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
