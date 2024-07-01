// [[]] chi co path: docs thi cung vao route duoc   (chỉ mỗi docs cũng được)
// []   dung chinh xac route (vi du: /docs/blala)
const page = (props) => {
  const { params } = props;

  console.log("tttt", params);

  if (params.slug?.length === 2) {
    return <>path 2</>;
  } else if (params.slug?.length === 1) {
    return <>path 1</>;
  }

  return <div>doc home page</div>;
};

export default page;
