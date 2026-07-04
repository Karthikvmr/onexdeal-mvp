import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/store/authSlice";
import themeReducer from "@/features/theme/store/themeSlice";
import wishlistReducer from "@/features/wishlist/store/wishlistSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  wishlist: wishlistReducer,
});

export type RootState = ReturnType<
  typeof rootReducer
>;