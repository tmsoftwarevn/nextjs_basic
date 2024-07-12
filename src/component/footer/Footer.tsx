import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="m-5">
            <div className="container">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-1">
                        <div>
                            <span className="text-lg font-semibold inline-block mb-2">
                                Mua sắm và tìm hiểu
                            </span>

                            <div className="grid gap-1">
                                <p>
                                    <Link href={'/'}>Thuốc</Link>
                                </p>
                                <p>
                                    <Link href={'/'}>Thực phẩm chức năng</Link>
                                </p>
                                <p>
                                    <Link href={'/'}>Thiết bị y tế</Link>
                                </p>
                                <p>
                                    <Link href={'/'}>Chăm sóc cơ thể</Link>
                                </p>
                                <p>
                                    <Link href={'/'}>Dược mỹ phẩm</Link>
                                </p>
                            </div>

                            <span className="text-lg font-semibold inline-block my-3">
                                Nam An Care+
                            </span>
                            <div className="grid gap-1">
                                <p>
                                    <Link href={'/'}>Mua thuốc online</Link>
                                </p>
                                <p>
                                    <Link href={'/'}>Gọi điện đặt hàng</Link>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-span-1">
                        <div>
                            <span className="text-lg font-semibold inline-block mb-2">
                                Tìm hiểu thêm
                            </span>

                            <div className="grid gap-1">
                                <p>
                                    <Link href="/">Góc sức khoẻ</Link>
                                </p>
                                <p>
                                    <Link href="/">Tra cứu thuốc</Link>
                                </p>
                                <p>
                                    <Link href="/">Tra cứu dược chất</Link>
                                </p>
                                <p>
                                    <Link href="/">Tra cứu dược liệu</Link>
                                </p>
                                <p>
                                    <Link href="/">Bệnh thường gặp</Link>
                                </p>
                                <p>
                                    <Link href="/">Bệnh viện</Link>
                                </p>
                                <p>
                                    <Link href="/">Ann và cộng đồng</Link>
                                </p>
                                <p>
                                    <Link href="/">Sự kiện</Link>
                                </p>
                                <p>
                                    <Link href="/">Tuyển dụng</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <span className="text-lg font-semibold inline-block mb-2">
                                Giá trị cốt lõi
                            </span>
                            <div className="grid gap-1">
                                <div>
                                    <p>
                                        <Link href="/">Môi trường</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Quyền Riêng Tư</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Chuỗi Cung Ứng</Link>
                                    </p>
                                </div>
                                <span className="text-lg font-semibold inline-block my-3">
                                    Về Nam An
                                </span>
                                <div className="grid gap-1">
                                    <p>
                                        <Link href="/">Giới thiệu công ty</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Lãnh Đạo Của Apple</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Nhà Đầu Tư</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Đạo Đức & Quy Tắc</Link>
                                    </p>
                                    <p>
                                        <Link href="/">Liên Hệ</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <span className="text-lg font-semibold inline-block mb-2">
                                Liên hệ
                            </span>
                            <div className="grid gap-1">
                                <p>
                                    <Link href="/">Gọi điện đặt hàng</Link>
                                </p>
                                <p>
                                    <Link href="/">19003085</Link>
                                </p>
                                <p>
                                    <Link href="/">Góp ý, khiếu nại</Link>
                                </p>
                                <p>
                                    <Link href="/">18003085</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <span className="text-lg font-semibold inline-block mb-2">
                                Kết nối với Nam An:
                            </span>
                            <div className="flex items-center gap-4 ">
                                <Image src={"fb.png"} alt="sdf" width={40} height={40} />
                                <Image src={"yt.png"} alt="sdf" width={40} height={40} />
                                <Image src={"zalo.png"} alt="sdf" width={40} height={40} />
                            </div>
                            <div>
                                <span className="text-lg font-semibold inline-block my-5">Tích điểm đổi quà</span>
                                <div className="h-[50px] bg-second-main rounded-[15px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;