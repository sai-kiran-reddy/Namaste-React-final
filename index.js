import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo - container">
      <img
        className="logo"
        src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
      />
    </div>
    <div className="navigation">
      <ul>
        <li>home</li>
        <li>about us</li>
        <li>contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestroContainer = function({resName,cusine}) {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0"
      }}
    >
      <img className="res-img" src="https://lh3.googleusercontent.com/oEm99s7dAg9xGVCzzjftCInsi0zMEoZJm4jldH1CoegeBRN5nyUwEiX5ICgH7VAP9E2oTzoab5USzSkY38UMLV38Gw=w512-rw" />
      <h3>{resName}</h3>
      <h4> {cusine} </h4>
      <h4> 4.5 rating </h4>
      <h4> ETA :  24 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="restro-container">
      <RestroContainer resName ="Meghana Foods" cusine="northindian , eastern" />
      <RestroContainer  resName ="KFC" cusine="northindian , eastern" />
      <RestroContainer  resName ="Mugalai" cusine="northindian , eastern" />
      <RestroContainer  resName ="Kerala" cusine="northindian , eastern"/>
        <RestroContainer  resName ="Arabic REst" cusine="northindian , Arabic" />
      </div>
    </div>
  );
};

const App = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<App />);
