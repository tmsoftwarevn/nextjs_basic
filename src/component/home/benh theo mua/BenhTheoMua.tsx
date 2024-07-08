import SlideOneRow from "@/component/slide product/one row/SlideOneRow";
import TabList from "@/component/tabs/TabList";

const BenhTheoMua = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl">
                <span className="font-bold">Bệnh theo mùa. </span><br></br>
                <span className="text-gray-600 font-semibold">
                Bảo vệ sức khỏe, tăng cường đề kháng. </span>
            </h2>
            <div className="mt-5"></div>
            
            <TabList />

            <SlideOneRow />
        

        </div>
    );
}

export default BenhTheoMua;