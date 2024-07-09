"use client";

import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "this is about",
//   description: "description about",
// };

const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className="text-red">about</div>
      <button onClick={() => handleClick()}>link to home</button>
    </>
  );
};

export default About;
