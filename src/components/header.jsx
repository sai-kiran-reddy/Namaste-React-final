import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [loginbutton, setlogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo - container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navigation">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => setlogin("logout")}>
            {" "}
            {loginbutton}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};
