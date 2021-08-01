import type { IProduct } from "../models/Product";

import Service from "./Service";

import products from "../providers/local/products.json";

export default class LocalService extends Service {
  async getProductList(): Promise<IProduct[]> {
    return products;
  }

  async getProductDetail(id: string): Promise<IProduct | null> {
    return (
      products.find((product: IProduct) => product.id.toString() === id) || null
    );
  }
}
