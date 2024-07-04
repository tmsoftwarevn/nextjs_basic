import "../navbar.scss";
import Image from 'next/image';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";


const Navbar_2 = () => {
    return (
        <>
            <div className="flex items-center justify-between mt-3">
                <Image src="/logo.png" width={238} height={65} alt='nha thuoc' />
                <div className='md:w-[590px]'>
                    <div className='inline-flex items-center rounded-[35px] p-[10px] pl-5 w-full bg-white h-14'>
                        <input className='w-full outline-none bg-transparent placeholder:text-gray-600 placeholder:font-semibold' placeholder='Tìm tên thuốc, thực phẩm chức năng, bệnh lý...' />
                        <div className='p-2 bg-btn-icon-search rounded-full text-2xl'>
                            <GoSearch className='color-btn-search' />
                        </div>
                    </div>
                </div>

                <div className='text-white text-lg grid gap-y-2 font-semibold'>
                    <div className='flex items-center py-1 px-3 bg-nav-btn rounded-full'>
                        <IoPerson className="mr-2"/>
                        <div>Tài khoản hội viên</div>
                    </div>
                    <div className='flex gap-3 justify-between'>
                        <div className='flex items-center py-1 px-3 bg-nav-btn rounded-full'>
                            <FaCartShopping className="mr-2"/>
                            <div>Giỏ hàng</div>
                        </div>
                        <div className="flex items-center py-1 px-7 bg-red-500 rounded-full">
                            <div>0</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=''>
                <ul className='flex gap-5 items-center text-white justify-center'>
                    <li>Khẩu trang</li>
                    <li>Men vi sinh</li>
                    <li>Vitamin</li>
                    <li>Sắt</li>
                    <li>Kem chống nắng</li>
                    <li>dầu nóng</li>
                    
                </ul>
            </div>
        </>
    );
}

export default Navbar_2;