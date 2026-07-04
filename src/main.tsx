import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import QueryProvider from "./providers/QueryProviders.tsx";

import { Provider } from "react-redux";

import { store } from "@/app/store";
import AuthProvider from "@/providers/AuthProviders.tsx";

import ThemeProvider from "@/features/theme/providers/ThemeProvider";

import "./index.css";
import { Toaster } from "sonner";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <App />
            <Toaster
    richColors
    position="top-right"
    closeButton
    duration={3000}
  />
          </ThemeProvider>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);