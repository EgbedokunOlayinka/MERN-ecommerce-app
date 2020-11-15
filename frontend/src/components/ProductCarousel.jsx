import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listTopProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image fluid src={product.image} alt={product.name} />
            <Carousel.Caption className="carousel-caption">
              <p>
                {product.name} ({product.price})
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
