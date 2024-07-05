"use client";

import CardProduct from "@/component/card product/CardProduct";
import Slider from "react-slick";


let settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};


const SlideSale = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <Slider {...settings}>
                <div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-4 ">
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
                    <div className="grid grid-cols-5 grid-rows-2 gap-4 ">
                        {
                            arr.map((item, idx) => {
                                return (
                                    <>
                                        <div className="bg-teal-300">
                                            sản phẩm:  {idx * 2}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </Slider>

        </>
    );
}

export default SlideSale;