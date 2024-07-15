import Image from "next/image";

const CardBlogHome = () => {


    return (
        <div className="flex gap-5 items-center">
            <div className="grow ">
                <div className="w-40">
                    <Image src={'mypham.jpg'} alt="dsf"
                        width="0"
                        height="0"
                        sizes="100vw"

                        className="w-full h-full rounded-[20px]" />
                </div>

            </div>

            <div>
                <p>Kiến thức y khoa</p>
                <p className="text-xl font-bold">Sốt xuất huyết Dengue là gì? ​Nguyên nhân gây bệnh</p>
                <p className="overflow-hidden mt-2 text-sm text-gray-10 font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">Sốt xuất huyết Dengue là một bệnh ​truyền nhiễm do muỗi Aedes truyền từ ​người sang Sốt xuất huyết Dengue là một bệnh ​truyền nhiễm do muỗi Aedes truyền từ ​người sang</p>
            </div>
        </div>
    );
}

export default CardBlogHome;