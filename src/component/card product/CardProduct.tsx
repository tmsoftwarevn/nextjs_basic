import Image from "next/image";

const CardProduct = () => {
    return (
        <div className="card">
            <Image
                src="/product.jpg"
                alt="fdslj"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto "
            />
            <h3 className="overflow-hidden text-gray-10 font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường tiêu hóa (5ml)</h3>
        </div>
    );
};

export default CardProduct;
