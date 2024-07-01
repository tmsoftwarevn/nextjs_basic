import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    idProduct: string;
  };
};

export const generateMetadata = async({params} : Props):Promise< Metadata > =>{
  const title = await new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(`${params.idProduct}`)
    })
  })
  return{
    title: `title product : ${title}`
  }
}

const Page = ({ params }: Props) => {
  return <div>Product ID: {params.idProduct}</div>;
};

export default Page;
