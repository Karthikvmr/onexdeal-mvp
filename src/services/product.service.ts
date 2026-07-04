import api from "@/api/axios";
import { API_ENDPOINTS } from "@/api/endpoints";

import { PRODUCTS } from "@/features/products/constants/products";

export const productService = {
  async getAll() {
    // TODO: Replace with API
    // const { data } = await api.get(API_ENDPOINTS.PRODUCTS);
    // return data;

    return Promise.resolve(PRODUCTS);
  },

  async getById(id: number) {
    // TODO: Replace with API
    return Promise.resolve(
      PRODUCTS.find((product) => product.id === id)
    );
  },
};