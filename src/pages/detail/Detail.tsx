import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/container/Container";

import Service from "../../services";
import type { IProduct } from "../../models/Product";

type DetailUrlParams = {
  productId: string;
};

function Detail() {
  const { productId } = useParams<DetailUrlParams>();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    async function fetchProductDetail() {
      const product: IProduct | null = await Service.getProductDetail(
        productId
      );
      setProduct(product);
    }

    fetchProductDetail();
  }, [productId]);

  return (
    <Container>
      <h2>Detail: {product ? product.name : "Product Not Exists!"}</h2>
    </Container>
  );
}

export default Detail;
