import React from "react";
import { Route, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Detail from "./Detail";

import product from "../../mocks/product.json";
import routes from "../../router/paths";

test("renders detail title", () => {
  render(
    <MemoryRouter initialEntries={["/detail/1"]}>
      <Route path={routes.detail}>
        <Detail productItem={product} />
      </Route>
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/Detail/i);
  expect(linkElement).toBeInTheDocument();
});
