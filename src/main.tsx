import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Providers } from "./context/Providers";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
        <GlobalStyles />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
