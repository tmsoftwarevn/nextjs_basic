// [[]] chi co path: docs thi cung vao route duoc
// []   dung chinh xac route
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
