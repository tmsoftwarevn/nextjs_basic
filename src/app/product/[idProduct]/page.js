const page = (props) => {
  const { params } = props;
  return <div>product is id: {params.idProduct}</div>;
};

export default page;
