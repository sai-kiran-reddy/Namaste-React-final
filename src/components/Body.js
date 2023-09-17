import { RestroContainer } from "./restrocontainer";
import { productList } from "../utils/productmock";
import { useEffect, useState } from "react";

export const Body = () => {
  const [productListAfter, updateProductList] = useState(productList);

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9660037&lng=77.6729397&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const updatedJson = json.data.cards.filter(
      (card1) => card1.card.relevance?.sectionId === "MENU_RETURN_FOOD"
    );
    updateProductList(updatedJson);
  };

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
        <div id="search">
          <input type="text"></input>
          <button>Search</button>
        </div>
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
