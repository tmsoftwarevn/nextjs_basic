import Image from "next/image";

import CarouselGrid from "./CarouselGrid";
import "./gridHome.scss";
import { RiBillLine } from "react-icons/ri";


const GridHome = () => {
    return (
        <>
            <div className="flex gap-4  h-[385px] ">
                <div className="w-[285px] bg-teal-300 rounded-[30px] hidden md:block relative">
                    <div className="absolute bottom-10 -translate-x-1/2 left-1/2 ">
                        <div className="bg-second-main py-2 px-5 text-white font-semibold rounded-[10px]">
                            Đăng kí ngay
                        </div>
                    </div>
                </div>
                <div className="grid-slide grid gap-4">
                    <div className="w-full bg-teal-300 rounded-[30px] h-[250px]">
                        <CarouselGrid />
                    </div>

                    <div className="grid grid-cols-2 gap-4 h-[120px]">
                        <div className=" col-span-1 bg-teal-300 rounded-[30px]">03</div>
                        <div className=" col-span-1 bg-teal-300 rounded-[30px]">04</div>
                    </div>
                </div>
            </div>

            {/* // grid 5 phần */}
            <div className="grid grid-cols-5 gap-5 my-10 h-[65px]">
                <div className="col-span-1 bg-white rounded-[10px] h-full flex items-center justify-center">
                    <div className=" flex items-center justify-center text-lg">
                        <RiBillLine className="text-xl mr-5" />
                        <div className="text-black font-semibold w-[120px]">Mua thuốc toa</div>
                    </div>

                </div>
                <div className="col-span-1 bg-white rounded-[10px] h-full flex items-center justify-center">
                    <div className=" flex items-center justify-center text-lg">
                        <RiBillLine className="text-xl mr-5" />
                        <div className="text-black font-semibold w-[120px]">Dược sĩ tư vấn</div>
                    </div>

                </div>
                <div className="col-span-1 bg-white rounded-[10px] h-full flex items-center justify-center">
                    <div className=" flex items-center justify-center text-lg">
                        <RiBillLine className="text-xl mr-5" />
                        <div className="text-black font-semibold w-[120px]">Tìm nhà thuốc</div>
                    </div>

                </div>
                <div className="col-span-1 bg-white rounded-[10px] h-full flex items-center justify-center">
                    <div className=" flex items-center justify-center text-lg">
                        <RiBillLine className="text-xl mr-5" />
                        <div className="text-black font-semibold w-[120px]">Hỏi & đáp về sức khỏe</div>
                    </div>

                </div>
                <div className="col-span-1 bg-white rounded-[10px] h-full flex items-center justify-center">
                    <div className=" flex items-center justify-center text-lg">
                        <RiBillLine className="text-xl mr-4" />
                        <div className="text-black font-semibold w-[130px]">Kiểm tra nhanh sức khỏe</div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default GridHome;
