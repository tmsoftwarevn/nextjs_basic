import GridHome from "@/component/home/grid home/GridHome";
import BenhTheoMua from "@/component/home/benh theo mua/BenhTheoMua";
import PopularCategory from "@/component/home/danh muc noi bat/PopularCategory";
import Sale from "@/component/home/sale/Sale";


import '@fortawesome/fontawesome-free/css/all.css';



export default function Home() {
  return (
    <>
      <div className="bg-body py-5">
        <div className="container">

          

          <GridHome />
          <Sale />
          <PopularCategory />
          <BenhTheoMua />


        </div>
      </div>

    </>

  );
}
