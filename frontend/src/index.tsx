import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import QueryClient from "./utils/client";
import { QueryClientProvider } from "react-query";

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={QueryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
