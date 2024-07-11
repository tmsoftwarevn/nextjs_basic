import './globals.css';
import { Metadata } from "next";
import Navbar from "@/component/navbar/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const metadata:Metadata = {
  title:{
    absolute: "",         // tiêu đề con không bị ảnh hưởng bởi template
    default: "tieu de mac dinh",
    template: "%s template"         /// tiêu đề con có thêm từ khóa
  },
  description: 'description by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body >
       <Navbar />
        {children}
        <footer className="py-5 bg-blue-600">
          footer
        </footer>

      </body>
    </html>
  )
}
