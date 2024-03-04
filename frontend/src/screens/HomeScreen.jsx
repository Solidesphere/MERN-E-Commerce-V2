import { Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isError, isLoading, error } = useGetProductsQuery({
    keyword,
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
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      <Meta />
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
      <Paginate
        pages={data.pages}
        page={data.page}
        keyword={keyword ? keyword : ""}
      />
    </>
  );
};

export default HomeScreen;
