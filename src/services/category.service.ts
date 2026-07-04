import { CATEGORIES } from "@/features/home/constants/categories";

export const categoryService = {
  async getAll() {
    return Promise.resolve(CATEGORIES);
  },
};