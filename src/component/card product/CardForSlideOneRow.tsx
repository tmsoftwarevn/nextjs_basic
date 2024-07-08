import Image from "next/image";

const CardForSlideOneRow = () => {
    return (
        <div className="bg-white rounded-[15px] relative h-full">
            <div className="pt-5 pb-1 px-3 text-xs text-gray-600 font-semibold">
                Chuyên gia khuyến cáo
            </div>
            <div className="px-3 text-lg font-semibold ">
                Bổ sung nước và dinh dưỡng đầy đủ để ngừa cảm cúm
            </div>
           
            <Image
                src="/benhtheomua.jpg"              
                alt="fdslj"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-[15px]"
            />

            <div className="absolute bottom-10 font-semibold -translate-x-1/2 left-1/2 px-5 py-2 mx-auto text-center w-4/5 cursor-pointer rounded-full bg-main text-white">
                Xem tất cả
            </div>
        </div>
    );
}

export default CardForSlideOneRow;