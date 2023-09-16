import { LOGO_URL } from "../utils/constants";

export const Header = () => (
    <div className="header">
      <div className="logo - container">
        <img
          className="logo"
          src={LOGO_URL}
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