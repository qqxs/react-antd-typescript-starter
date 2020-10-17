import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary";
import { routes, defaultRoute } from "./routes";

const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>{renderRoutes(routes, { defaultRoute })}</BrowserRouter>
  </ErrorBoundary>
);

export default Router;
