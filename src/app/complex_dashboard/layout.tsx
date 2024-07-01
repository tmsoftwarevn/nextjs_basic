import React from "react";


const DashboardLayout = ({
    children,
    notification,
    revenue,
    user
}: {
    children: React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode
}) => {
    return (
        <>
            {/* content from page.tsx */}
            <div>{children}</div>

            {/* <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <div>  {user} </div>
                    <div>  {revenue}  </div>
                </div>
                <div style={{ display: 'flex', }}>  {notification} </div>
            </div> */}



            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="col-span-2 ">  {user} </div>
                <div className="row-span-2 col-span-2">{revenue}</div>
                <div className="row-span-3">{notification}</div>

            </div>


        </>
    );
}

export default DashboardLayout;