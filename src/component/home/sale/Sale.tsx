import SlideSale from "@/component/slide product/two row/SlideTwoRow";
import "./sale.scss";
import Image from "next/image";

const Sale = () => {
   
    return (
        <>
            <div className="sale py-5 px-5 bg-yellow-300 mt-[80px] relative rounded-[30px]">
                <div className="absolute left-0 img-sale">
                    <Image src={'./sale.jpg'} alt="fdsfdf" width={200} height={200} />
                </div>
                <div className="container">
                    <h2 className="text-6xl mb-20 text-center font-bold text-red-700 font-semibold">Khuyến mãi tháng 05</h2>
                    <SlideSale />

                </div>
            </div>
        </>
    );
}

export default Sale;