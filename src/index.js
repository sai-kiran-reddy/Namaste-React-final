import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <h1>oops something went wrong</h1>
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);
