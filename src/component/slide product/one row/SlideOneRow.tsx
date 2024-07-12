"use client";

import Slider from "react-slick";
import CardForSlideOneRow from "@/component/card product/CardForSlideOneRow";
import "./slideonerow.scss";
import CardProduct from "@/component/card product/CardProduct";

import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

let settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};



const SlideOneRow = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sliderRef = useRef<Slider>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    return (
        <div className="flex gap-5 mt-10 ">
            <div className="w-[220px] grow">
                <CardForSlideOneRow />
            </div>
            <div className="width-slide-one-row relative">
                <Slider ref={sliderRef} {...settings}>
                    {arr.map((item, idx) => {
                        return (
                            <div key={`sor${idx}`}>
                                <div className="mr-5">
                                    <CardProduct />
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
        </div>
    );
};

export default SlideOneRow;
