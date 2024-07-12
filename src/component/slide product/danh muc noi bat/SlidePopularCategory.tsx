"use client";

import Slider from "react-slick";

import Image from "next/image";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

let settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
   

};


const SlidePopularCategory = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sliderRef = useRef<Slider>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {arr.map((item, idx) => {
                    return (
                        <div key={`spc${idx}`}>
                            <div className="mr-5">
                                <Image
                                    src={"./mypham.jpg"}
                                    alt="fdsfd"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto "
                                />
                                <div className="mt-3 font-semibold text-basic">Dược mỹ phẩm</div>
                            </div>

                        </div>
                    );
                })}
            </Slider>

            <button className="arrow-left-tr" onClick={previous}>
                <div className="arrow-left-tr__icon">
                    <MdKeyboardArrowLeft />
                </div>
            </button>
            <button className="arrow-right-tr" onClick={next}>
                <div className="arrow-right-tr__icon">
                    <MdKeyboardArrowRight />
                </div>
            </button>
        </div>
    );
};

export default SlidePopularCategory;
