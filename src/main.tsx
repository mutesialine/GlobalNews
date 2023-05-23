import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.tsx";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import newsApi from "./features/apiSlice.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={newsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);