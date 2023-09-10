import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Category = () => {
  const [priceRange, setPriceRange] = useState(1000);

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // input filter
  const [select, setSelect] = useState("");
  const [buttonData, setButtonData] = useState();
  const [searchValue, setSearchValue] = useState("");

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

  //--------filtered Data----------
  function filterData(products, select) {
    let filterProduct = products;

    if (select === "all") {
      filterProduct = products;
    } else if (select) {
      filterProduct = filterProduct.filter(
        ({ category, color, company }) =>
          category === select || color === select || company === select
      );
    }

    filterProduct = filterProduct.filter(
      ({ newPrice }) => newPrice <= priceRange
    );

    return filterProduct;
  }

  let finalData = filterData(products, select, buttonData, priceRange);
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
            <h1 className="text-2xl font-semibold mb-4">Price Filter</h1>

            <label htmlFor="priceRange" className="block mb-2 text-gray-700">
              Select Price Range:
            </label>
            <input
              type="range"
              id="priceRange"
              min="800"
              max="10000"
              step=""
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full h-[5px] text-[gray]"
            />
            <p className="mt-2">
              Price Range:{" "}
              <span className="font-semibold text-blue-600">${priceRange}</span>
            </p>
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
