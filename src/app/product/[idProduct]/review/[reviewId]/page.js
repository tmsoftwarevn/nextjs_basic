const page = (props) => {
    const {params} = props;
    return (
        <div>
            review for id is:  {params.reviewId}
        </div>
    );
}

export default page;