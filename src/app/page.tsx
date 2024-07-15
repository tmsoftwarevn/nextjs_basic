import GridHome from "@/component/home/grid home/GridHome";
import BenhTheoMua from "@/component/home/benh theo mua/BenhTheoMua";
import PopularCategory from "@/component/home/danh muc noi bat/PopularCategory";
import Sale from "@/component/home/sale/Sale";


import '@fortawesome/fontawesome-free/css/all.css';
import SanPhamSucKhoe from "@/component/home/san pham suc khoe/SanPhamSucKhoe";
import SanPhamGoiY from "@/component/home/san pham goi y/SanPhamGoiY";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import KienThucSucKhoe from "@/component/home/kien thuc suc khoe/KienThucSucKhoe";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-body py-5">
        <div className="container">



          <GridHome />
          <Sale />
          <PopularCategory />
          <BenhTheoMua />
          <SanPhamSucKhoe />
          <SanPhamGoiY />
          <KienThucSucKhoe />


        </div>
      </div>

      <Footer />

    </>

  );
}
