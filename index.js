import React from "react";
import  ReactDOM  from "react-dom/client";


const head = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag react"),
    React.createElement("h2", {}, "h2 tag react"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag react"),
    React.createElement("h2", {}, "h2 tag react"),
  ])]
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(head);
