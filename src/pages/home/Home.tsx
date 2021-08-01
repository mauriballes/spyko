import React, { useState, useEffect } from "react";

import Container from "../../components/container/Container";

import Service from "../../services";
import type { IProduct } from "../../models/Product";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products: IProduct[] = await Service.getProductList();
      setProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      <h2>Home</h2>
      <ul>
        {products.map((item: IProduct) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
