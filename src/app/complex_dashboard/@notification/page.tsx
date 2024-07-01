import Card from "@/component/card"
import Link from "next/link";

const page = () => {
    return (
        <>
            <Card>
                Notification
                <Link href={'/complex_dashboard/archived'}>Archived</Link>
            </Card>
           
        </>

    );
}

export default page;