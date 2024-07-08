"use client";

import Slider from "react-slick";

import Image from "next/image";

let settings = {
    //dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
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

const SlidePopularCategory = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <Slider {...settings}>
                {arr.map((item, idx) => {
                    return (
                        <div>
                            <div className="mr-5">
                                <Image
                                    src={"/mypham.jpg"}
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
        </>
    );
};

export default SlidePopularCategory;
