"use client";

import Slider from "react-slick";
import CardForSlideOneRow from "@/component/card product/CardForSlideOneRow";
import "./slideonerow.scss";
import CardProduct from "@/component/card product/CardProduct";

let settings = {
    //dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} slick-next-sale`}
            style={{ ...style, display: "block" }}
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

const SlideOneRow = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="flex gap-5 mt-10 ">
            <div className="w-[220px] grow">
                <CardForSlideOneRow />
            </div>
            <div className="width-slide-one-row">
                <Slider {...settings}>
                    {arr.map((item, idx) => {
                        return (
                            <div>
                                <div className="mr-5">
                                    <CardProduct />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SlideOneRow;
