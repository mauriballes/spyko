import React from "react";

import Container from "../../components/container/Container";

import products from "../../mocks/products.json";
import type { Product } from "../../models/Product";

function Home() {
  return (
    <Container>
      <h2>Home</h2>
      <ul>
        {products.map((item: Product) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
