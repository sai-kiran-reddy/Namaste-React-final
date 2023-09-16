import { RestroContainer } from "./restrocontainer";
import { productList } from "../utils/productmock";
import { useState } from "react";

export const Body = () => {
  const [productListAfter, updateProductList] = useState(productList);
  return (
    <div className="body">
      <div className="filter">
        {" "}
        <button
          className="filter-btn"
          onClick={() => {
            updateProductList(
              productListAfter.filter((item) => item.rating.rate > 4.0)
            );
          }}
        >
          Top rated
        </button>
      </div>

      <div className="restro-container">
        {productListAfter.map((item) => {
          return (
            <RestroContainer
              resName={item.title}
              cusine={item.category}
              img={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};
