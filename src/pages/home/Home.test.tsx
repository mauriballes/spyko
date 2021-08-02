import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

import productList from "../../mocks/products.json";

test("renders home title", () => {
  render(<Home productsList={productList} />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
