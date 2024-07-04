import Image from "next/image";

const GridHome = () => {
    return (
        <>
        
            <div className="h-96 grid grid-rows-10 grid-flow-col gap-4">
                <div className="row-span-10 col-span-1 bg-teal-300 hidden md:block">
                    {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image src={'/ttt.jpg'} alt="fsdfdsf" layout="fill" objectFit="cover" />
                    </div> */}
                </div>

                <div className="row-span-7 col-span-2 bg-teal-300">02</div>
                <div className="row-span-3 col-span-1 bg-teal-300 ">03</div>
                <div className="row-span-3 col-span-1 bg-teal-300 ">04</div>
            </div>


        </>
    );
}

export default GridHome;