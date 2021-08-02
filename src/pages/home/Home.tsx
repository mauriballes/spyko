import React, { useState, useEffect } from "react";

import Container from "../../components/container/Container";

import Service from "../../services";
import type { IProduct } from "../../models/Product";

type HomeProps = {
  productsList?: IProduct[];
};

function Home({ productsList = [] }: HomeProps) {
  const [products, setProducts] = useState<IProduct[]>(productsList);

  useEffect(() => {
    async function fetchProducts() {
      const productsFetched: IProduct[] = await Service.getProductList();
      setProducts(productsFetched);
    }

    if (products.length === 0) fetchProducts();
  }, [products]);

  return (
    <Container>
      <h2>Home</h2>
      <ul>
        {products.map((item: IProduct) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
