import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher.ts";
import Router from "./pages/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <SWRConfig value={{ fetcher }}>
        <Router />
      </SWRConfig>
    </Theme>
  </React.StrictMode>
);
