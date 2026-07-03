import { Routes, Route } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import HomePage from "../../features/home/pages/HomePage";
import NotFound from "../../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;