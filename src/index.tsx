import { render } from "react-dom";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "./App";

render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
