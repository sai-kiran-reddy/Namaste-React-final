import { CDN_URL } from "../utils/constants";

export const RestroContainer = function ({ resName, cusine, img }) {
  console.log("inside");
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-img" src={img} />
      <h3>{resName}</h3>
      <h4> {cusine} </h4>
      <h4> 4.5 rating </h4>
    </div>
  );
};
