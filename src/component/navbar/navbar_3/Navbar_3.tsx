import { RiArrowDownSFill } from "react-icons/ri";
import { menuHeader } from "@/lib/data fake/dataFake";
const Navbar_3 = () => {
    let arr = menuHeader();
    
    return (
        <div>
            <ul className="flex gap-4 justify-between mt-5">
                {
                    arr.map((items) => {
                        return (
                            <>
                                <li>
                                    <div className="cursor-pointer flex items-end text-white font-semibold">
                                        {items}
                                        <RiArrowDownSFill className="text-2xl" />
                                    </div>
                                </li>
                            </>
                        )
                    })
                }

            </ul>
        </div>
    );
}

export default Navbar_3;