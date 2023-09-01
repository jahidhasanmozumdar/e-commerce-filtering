import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Category = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // input filter
  const [select, setSelect] = useState("");
  const [selectPrice, setSelectPrice] = useState("");
  const [buttonData, setButtonData] = useState();
  const [searchValue, setSearchValue] = useState("");
  console.log(selectPrice);

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filterItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase())
  );
  //-----radio filter
  const handleChange = (event) => {
    const value = event.target.value;
    setSelect(value.toLocaleLowerCase());
    console.log(value);
  };
  //--------button filter---------
  const handleClick = (e) => {
    const buttonValue = e.target.value;
    setButtonData(buttonValue);
  };
  //--------button filter for Price---------
  const handleClickForPrice = (e) => {
    const minValue = e.target.min;
    const maxValue = e.target.max;
    console.log(minValue, maxValue);
  };

  //--------filtered Data----------
  function filterData(products, select, buttonData) {
    let filterProduct = products;

    if (select === "all") {
      filterProduct = products;
    } else if (select) {
      filterProduct = filterProduct.filter(
        ({ category, color, company, newPrice }) =>
          category === select ||
          color === select ||
          company === select ||
          newPrice === select
      );
    }
    return filterProduct;
  }
  let finalData = filterData(products, select, buttonData);
  return (
    <div className="flex flex-row max-w-[1440px] mx-auto gap-[40px]">
      <div className="flex justify-between min-w-[300px] min-h-full">
        <div className="flex justify-start items-start flex-col gap-8 mt-[60px]">
          <div>
            <h2 className="text-xl ">Category</h2>
            <div>
              <input
                type="radio"
                name="Category"
                value="All"
                onChange={handleChange}
              />
              <label htmlFor="All"> All</label>
            </div>
            <div>
              <input
                type="radio"
                name="Category"
                value="sneakers"
                onChange={handleChange}
              />
              <label htmlFor="Sneakers"> Sneakers</label>
            </div>
            <div>
              <input
                type="radio"
                name="Category"
                value="flats"
                onChange={handleChange}
              />
              <label htmlFor="Flats"> Flats</label>
            </div>
            <div>
              <input
                type="radio"
                name="Category"
                value="sandals"
                onChange={handleChange}
              />
              <label htmlFor="Sandals"> Sandals</label>
            </div>
            <div>
              <input
                type="radio"
                name="Category"
                value="heels"
                onChange={handleChange}
              />
              <label htmlFor="Hells"> Hells</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">Price</h2>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  name="Price"
                  value="All"
                  onChange={handleChange}
                />
                All
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  name="Price"
                  value={1000}
                  min={1000}
                  max={1100}
                  onChange={handleChange}
                />
                $1000 - 1100
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  name="Price"
                  value={1100}
                  min={1100}
                  max={1200}
                  onChange={handleChange}
                />
                $1100 - 1200
              </label>
            </div>
            <div>
              <label htmlFor="Sandals">
                <input
                  type="radio"
                  name="Price"
                  value={1300}
                  min={1300}
                  max={1350}
                  onChange={handleChange}
                />
                $1300 - 1350
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input
                  type="radio"
                  name="Price"
                  value={1350}
                  min={1350}
                  max={1400}
                  onChange={handleChange}
                />
                $1350 - 1400
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">color</h2>
            <div>
              <input
                type="radio"
                name="color"
                value="all"
                onChange={handleChange}
              />
              <label htmlFor="All"> All</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="black"
                onChange={handleChange}
              />
              <label htmlFor="Black"> Black</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="red"
                onChange={handleChange}
              />
              <label htmlFor="Red"> Red</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="blue"
                onChange={handleChange}
              />
              <label htmlFor="Blue"> Blue</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="green"
                onChange={handleChange}
              />
              <label htmlFor="Blue"> Green</label>
            </div>
            <div>
              <input
                type="radio"
                name="color"
                value="white"
                onChange={handleChange}
              />
              <label htmlFor="Blue"> White</label>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-[1px] h-full"></div>
      </div>
      <div className="min-w-[1100px] mx-auto">
        <div className="w-full flex flex-col mt-10 justify-center items-start">
          <div>
            <div>
              <h3 className="text-2xl font-semibold">Recommend</h3>
            </div>
            <div className="flex justify-start items-center gap-7 mt-2 mb-3">
              <button
                className="border-2 py-2 px-4"
                onClick={handleClick}
                value="All Product"
              >
                All Product
              </button>
              <button
                className="border-2 py-2 px-4"
                onClick={handleClick}
                value="Nike"
              >
                Nike
              </button>
              <button
                className="border-2 py-2 px-4"
                onClick={handleClick}
                value="Adidas"
              >
                Adidas
              </button>
              <button
                className="border-2 py-2 px-4"
                onClick={handleClick}
                value="Puma"
              >
                Puma
              </button>
              <button
                className="border-2 py-2 px-4"
                onClick={handleClick}
                value="Vans"
              >
                Vans
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[30px]">
            {finalData?.slice(0, 100)?.map((p) => (
              <Product products={p} key={Math.random()}></Product>
            ))}
          </div>

          {/* <button
            className={` justify-center items-center mx-auto ${
              products?.length > 8 ? "flex" : "hidden"
            }`}
          >
            See All
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
