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
  });
  return (
    <div className="flex flex-row">
      <div className="flex justify-between min-w-[200px] min-h-full">
        <div className="flex justify-center items-start h-full flex-col gap-8">
          <div>
            <h2 className="text-xl ">Category</h2>
            <div>
              <input type="radio" name="All" id="All" value="Initial value" />
              <label htmlFor="All"> All</label>
            </div>
            <div>
              <input
                type="radio"
                name="Sneakers"
                id="Sneakers"
                value="Initial value"
              />
              <label htmlFor="Sneakers"> Sneakers</label>
            </div>
            <div>
              <input
                type="radio"
                name="Flats"
                id="Flats"
                value="Initial value"
              />
              <label htmlFor="Flats"> Flats</label>
            </div>
            <div>
              <input
                type="radio"
                name="Sandals"
                id="Sandals"
                value="Initial value"
              />
              <label htmlFor="Sandals"> Sandals</label>
            </div>
            <div>
              <input
                type="radio"
                name="Hells"
                id="Hells"
                value="Initial value"
              />
              <label htmlFor="Hells"> Hells</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">Price</h2>
            <div>
              <input type="radio" name="" id="" value="Initial value" />
              <label htmlFor=""> All</label>
            </div>
            <div>
              <input type="radio" name="" id="" value="Initial value" />
              <label htmlFor=""> $0 - 50 </label>
            </div>
            <div>
              <input type="radio" name="" id="" value="Initial value" />
              <label htmlFor=""> $50 - 100 </label>
            </div>
            <div>
              <input type="radio" name="" id="" value="Initial value" />
              <label htmlFor="Sandals"> $100 - 150</label>
            </div>
            <div>
              <input type="radio" name="" id="" value="Initial value" />
              <label htmlFor=""> $150 - 0</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">color</h2>
            <div>
              <input
                type="radio"
                name="All"
                id="All"
                checked
                value="Initial value"
              />
              <label htmlFor="All"> All</label>
            </div>
            <div>
              <input
                type="radio"
                name="Black"
                id="Black"
                value="Initial value"
              />
              <label htmlFor="Black"> Black</label>
            </div>
            <div>
              <input type="radio" name="Red" id="Red" value="Initial value" />
              <label htmlFor="Red"> Red</label>
            </div>
            <div>
              <input type="radio" name="Blue" id="Blue" value="Initial value" />
              <label htmlFor="Blue"> Blue</label>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-[1px] h-screen"></div>
      </div>
      <div className="w-full flex flex-col mt-10">
        <div>
          <h3 className="text-2xl font-semibold">Recommend</h3>
        </div>
        <div className="flex justify-start items-center gap-7 mt-2 mb-3">
          <button className="border-2 py-2 px-4">All Product</button>
          <button className="border-2 py-2 px-4">Nike</button>
          <button className="border-2 py-2 px-4">Adidas</button>
          <button className="border-2 py-2 px-4">Puma</button>
          <button className="border-2 py-2 px-4">Vans</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
