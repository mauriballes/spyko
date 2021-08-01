import React from "react";
import { useParams } from "react-router-dom";

type DetailUrlParams = {
  product: string;
};

function Detail() {
  const { product } = useParams<DetailUrlParams>();
  return <h1>Detail: {product}</h1>;
}

export default Detail;
