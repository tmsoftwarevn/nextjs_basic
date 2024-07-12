"use client";

interface TabListProps {
    tabs: { name: string; active: boolean }[];
    onTabClick: (index: number) => void;
}

const TabList: React.FC<TabListProps> = ({ tabs, onTabClick }) => {

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
                                onClick={() => onTabClick(idx)}
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
