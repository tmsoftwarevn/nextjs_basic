"use client";
import { useState } from "react";

const TabList = () => {
    type Tab = {
        name: string;
        active: boolean;
    };

    const [tabs, setTabs] = useState<Tab[]>([
        {
            name: "Ngừa bệnh cảm cúm",
            active: true,
        },
        {
            name: "Ngừa ho,đau họng",
            active: false,
        },
        {
            name: "Ngừa biến cố tim mạch",
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
        <div className="flex items-center gap-5">
            {tabs.map((item, idx) => {
                return (
                    <>
                        {
                            <div
                                key={`tab${idx}`}
                                className={
                                    item.active === true
                                        ? "w-fit bg-main text-white px-8 py-2 font-semibold rounded-full cursor-pointer"
                                        : "w-fit bg-white text-black px-8 py-2 font-semibold rounded-full cursor-pointer"
                                }
                                onClick={() => handleChangeTab(idx)}
                            >
                                {item.name}
                            </div>
                        }
                    </>
                );
            })}
        </div>
    );
};

export default TabList;
