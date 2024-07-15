"use client";

import CardBlogHome from "@/component/card blog/CardBlogHome";
import TabList from "@/component/tabs/TabList";
import { useState } from "react";

const KienThucSucKhoe = () => {
    type Tab = {
        name: string;
        active: boolean;
    };

    const [tabs, setTabs] = useState<Tab[]>([
        {
            name: "Bệnh",
            active: true,
        },
        {
            name: "Thuốc",
            active: false,
        },
        {
            name: "Khoẻ & đẹp",
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

    let arr = ['1', '1', '1', '1', '1', '1'];

    return (
        <div className="mt-20">
            <h2 className="text-3xl">
                <span className="font-bold">Kiến thức sức khoẻ.  </span>
                <span className="text-gray-600 font-semibold"> Hiểu để <br></br>
                    khoẻ hơn mỗi ngày. </span>
            </h2>
            <div className="mt-10"></div>
            <TabList tabs={tabs} onTabClick={handleChangeTab} />

            <div className="grid grid-cols-2 grid-rows-3 gap-20 mt-10">
                {
                    arr.map((item, idx) => {
                        return (
                            <div key={`cbh${idx}`} >
                                <CardBlogHome />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default KienThucSucKhoe;