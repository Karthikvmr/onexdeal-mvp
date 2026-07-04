import { Routes, Route } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";

import HomePage from "@/features/home/pages/HomePage";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";

import CategoriesPage from "@/features/products/pages/CategoriesPage";
import WishlistPage from "@/features/wishlist/pages/WishlistPage";
import PostAdPage from "@/features/products/pages/PostAdPage";

import NotFound from "@/pages/NotFound";
import SearchPage from "@/features/search/pages/SearchPage";
import ProductDetailsPage from "@/features/products/pages/ProductDetailsPage";
import DashboardPage from "@/pages/DashboardPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route
    path="/search"
    element={<SearchPage />}
  />

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

          <Route
    path="/products/:id"
    element={<ProductDetailsPage />}
    />

        <Route
    path="/dashboard"
    element={<DashboardPage />}
  />

        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/post-ad"
          element={<PostAdPage />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;