import GridHome from "@/component/grid home/GridHome";
import Sale from "@/component/home/sale/Sale";

export default function Home() {
  return (
    <>
      <div className="home py-5">
        <div className="container">
          <GridHome />
          <Sale />
        </div>
      </div>

    </>

  );
}
