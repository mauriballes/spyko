import type { IProduct } from "../models/Product";

export default abstract class Service {
  abstract getProductList(): Promise<IProduct[]>;
  abstract getProductDetail(id: string): Promise<IProduct | null>;
}
