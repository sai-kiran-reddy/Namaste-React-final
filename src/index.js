import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Body } from "./components/Body";

const App = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

console.log(<App />);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<App />);
