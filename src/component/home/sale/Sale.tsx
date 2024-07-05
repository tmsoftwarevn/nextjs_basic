import SlideSale from "@/component/slide product/sale/SlideSale";
import "./sale.scss";

const Sale = () => {
   
    return (
        <>
            <div className="sale py-5 px-5 bg-yellow-300 mt-[80px]">
                <div className="container">
                    <h2 className="text-5xl mb-10 text-center font-bold text-red-700 font-semibold">Khuyến mãi tháng 05</h2>
                    <SlideSale />

                </div>
            </div>
        </>
    );
}

export default Sale;