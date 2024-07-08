import Image from "next/image";

const CardProduct = () => {
    return (
        <div className="card bg-white p-3 rounded-[15px]">
            <Image
                src="/product.jpg"
                alt="fdslj"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto "
            />
            <h3 className="mt-2 overflow-hidden text-gray-10 font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường tiêu hóa (5ml)</h3>
            <div className="w-fit bg-main px-3 py-2 text-xs text-white font-semibold rounded-full">Chai</div>
            <div className="mt-2 flex justify-between items-center">
                <b className="color-main text-lg">270.000đ</b>
                <b className="line-through decoration-gray-600">300.000đ</b>
            </div>
            <div className="mt-2 py-2 rounded-full text-center bg-body text-xs text-gray-600 font-semibold">
                Hộp 31 viên
            </div>

            <div className="mt-2 py-2 rounded-full text-center bg-main text-sm text-white font-semibold">
               Chọn mua ngay
            </div>

        </div>
    );
};

export default CardProduct;
