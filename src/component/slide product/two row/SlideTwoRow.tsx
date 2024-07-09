"use client";

import Slider from "react-slick";
import "./slideTwoRow.scss";

import CardProduct from "@/component/card product/CardProduct";



let settings = {
    //dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
  
    return (
      <div
        className={`${className} slick-next-sale`}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev-sale`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

const SlideTwoRow = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <Slider {...settings}>
                <div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-5 ">
                        {
                            arr.map((item, idx) => {
                                return (
                                    <>
                                        <CardProduct />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-5 ">
                        {
                            arr.map((item, idx) => {
                                return (
                                    <div key={`str${idx}`}>
                                        <CardProduct />
                                    </div>    
                                )
                            })
                        }
                    </div>
                </div>

            </Slider>

        </>
    );
}

export default SlideTwoRow;