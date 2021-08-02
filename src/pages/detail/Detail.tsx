import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/container/Container";

import Service from "../../services";
import type { IProduct } from "../../models/Product";

type DetailUrlParams = {
  productId: string;
};

type DetailProps = {
  productItem?: IProduct | null;
};

function Detail({ productItem = null }: DetailProps) {
  const { productId } = useParams<DetailUrlParams>();
  const [product, setProduct] = useState<IProduct | null>(productItem);

  useEffect(() => {
    async function fetchProductDetail() {
      const productFetched: IProduct | null = await Service.getProductDetail(
        productId
      );
      setProduct(productFetched);
    }

    if (product === null) fetchProductDetail();
  }, [productId, product]);

  return (
    <Container>
      <h2>Detail: {product ? product.name : "Product Not Exists!"}</h2>
    </Container>
  );
}

export default Detail;
