import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </Theme>
  </React.StrictMode>
);
