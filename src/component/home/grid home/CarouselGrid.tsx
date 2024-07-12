"use client";

import Slider from "react-slick";
import Image from "next/image";
import "./gridHome.scss";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} slick-next-css`}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev-css`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

let settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
};

const CarouselGrid = () => {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="w-[803px] h-[250px] relative">
      <Slider
        ref={sliderRef}
        {...settings}>
        <div className="h-[250px] rounded-[30px] overflow-hidden text-center">
          {/* <Image
            src={"/ttt.jpg"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto "
            alt="đâsd"
          /> */}
          01
        </div>

        <div className="h-[250px] rounded-[30px] overflow-hidden text-center">
          {/* <Image
            src={"/ttt.jpg"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto "
            alt="đâsd"
          /> */}
          02
        </div>
        <div className="h-[250px] rounded-[30px] overflow-hidden text-center">
          {/* <Image
            src={"/ttt.jpg"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto "
            alt="đâsd"
          /> */}
          03
        </div>

      </Slider>

      <button className="arrow-left" onClick={previous}>
        <div className="arrow-left__icon">
          <MdKeyboardArrowLeft />
        </div>
      </button>
      <button className="arrow-right" onClick={next}>
        <div className="arrow-right__icon">
          <MdKeyboardArrowRight />
        </div>
      </button>


    </div>
  );
};

export default CarouselGrid;
