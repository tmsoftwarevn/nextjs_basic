import Link from "next/link";

const page = () => {
    return (
        <div>
            this is archived.
            <Link href={'/complex_dashboard'}>default</Link>
        </div>
    );
}

export default page;