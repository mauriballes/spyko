import React from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/container/Container";

type DetailUrlParams = {
  product: string;
};

function Detail() {
  const { product } = useParams<DetailUrlParams>();
  return (
    <Container>
      <h2>Detail: {product}</h2>
    </Container>
  );
}

export default Detail;
