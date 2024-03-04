import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
  const { pageNumber } = useParams();
  const { data, isError, isLoading, error } = useGetProductsQuery({
    pageNumber,
  });

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Message variant="denger">
        Error: {error?.data.message || error.error}
      </Message>
    );

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {data.products.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={product._id}
            className="d-flex align-items-stretch"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Paginate pages={data.pages} page={data.page} />
    </>
  );
};

export default HomeScreen;
