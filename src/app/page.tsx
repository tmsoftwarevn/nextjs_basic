import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1 className="text-center text-red-600 text-xl">Home</h1>
      <div>
        <Link href={'/blog'}>Blog</Link>
      </div>
      <div>
        <Link href={'/about'}>About</Link>
      </div>
      {/* replace : ko cho back về trang trước, sẽ back về home */}
      <Link href={'/product'} replace >product</Link>  
    </>

  );
}
