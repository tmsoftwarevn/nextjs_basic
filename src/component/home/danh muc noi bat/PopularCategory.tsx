import SlidePopularCategory from "@/component/slide product/danh muc noi bat/SlidePopularCategory";

const PopularCategory = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl">
                <span className="font-bold">Danh mục nổi bật. </span>
                <span className="text-gray-600 font-semibold"> Mua hàng <br></br>
                    tiện lợi & nhanh chóng hơn. </span>
            </h2>
            <div className="mt-10"></div>
            <SlidePopularCategory />

        </div>
    );
};

export default PopularCategory;
