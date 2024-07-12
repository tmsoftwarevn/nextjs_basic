"use client";

import Slider from "react-slick";
import "./slideTwoRow.scss";

import CardProduct from "@/component/card product/CardProduct";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



let settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};


const SlideTwoRow = () => {
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
                <div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-5 ">
                        {
                            arr.map((item, idx) => {
                                return (
                                    <div key={`str1${idx}`}>
                                        <CardProduct />
                                    </div>
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
}

export default SlideTwoRow;