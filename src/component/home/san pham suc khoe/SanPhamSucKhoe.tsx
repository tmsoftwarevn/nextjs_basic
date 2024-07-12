"use client";

import SlideOneRow from "@/component/slide product/one row/SlideOneRow";
import TabList from "@/component/tabs/TabList";
import { useState } from "react";

const SanPhamSucKhoe = () => {
    type Tab = {
        name: string;
        active: boolean;
    };

    const [tabs, setTabs] = useState<Tab[]>([
        {
            name: "Người cao tuổi",
            active: true,
        },
        {
            name: "Trẻ nhỏ/trẻ em",
            active: false,
        },
        {
            name: "Người bị tiểu đường",
            active: false,
        },

    ]);

    const handleChangeTab = (id: number) => {
        let arr: Array<any> = [];
        tabs.map((item, idx) => {
            if (+idx === +id && item.active === true) {
                // giữ nguyên vì đã hiện rồi
                arr.push({
                    name: item.name,
                    active: true,
                });
            } else if (+idx === +id && item.active === false) {
                // thay đổi do chưa bật
                arr.push({
                    name: item.name,
                    active: true,
                });
            } else {
                arr.push(
                    // ko click thì off
                    {
                        name: item.name,
                        active: false,
                    }
                );
            }
        });
        setTabs(arr);
    };


    return (
        <div className="mt-20">
            <h2 className="text-3xl">
                <span className="font-bold">Sản phẩm theo sức khoẻ. </span><br></br>
                <span className="text-gray-600 font-semibold">
                Sức khỏe cho người thân trong gia đình. </span>
            </h2>
            <div className="mt-5"></div>

            <TabList tabs={tabs} onTabClick={handleChangeTab} />

            <SlideOneRow />


        </div>
    );
}

export default SanPhamSucKhoe;