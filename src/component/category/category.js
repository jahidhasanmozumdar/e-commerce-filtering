import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex gap-12">
      <div className="flex justify-between min-w-[200px] min-h-full">
        <div className="flex justify-center items-start h-full flex-col gap-8">
          <div>
            <h2 className="text-xl ">Category</h2>
            <div>
              <input type="radio" name="All" id="All" />
              <label htmlFor="All"> All</label>
            </div>
            <div>
              <input type="radio" name="Sneakers" id="Sneakers" />
              <label htmlFor="Sneakers"> Sneakers</label>
            </div>
            <div>
              <input type="radio" name="Flats" id="Flats" />
              <label htmlFor="Flats"> Flats</label>
            </div>
            <div>
              <input type="radio" name="Sandals" id="Sandals" />
              <label htmlFor="Sandals"> Sandals</label>
            </div>
            <div>
              <input type="radio" name="Hells" id="Hells" />
              <label htmlFor="Hells"> Hells</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">Price</h2>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor=""> All</label>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor=""> $0 - 50 </label>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor=""> $50 - 100 </label>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor="Sandals"> $100 - 150</label>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <label htmlFor=""> $150 - 0</label>
            </div>
          </div>
          <div>
            <h2 className="text-xl ">color</h2>
            <div>
              <input type="radio" name="All" id="All" checked />
              <label For="All"> All</label>
            </div>
            <div>
              <input type="radio" name="Black" id="Black" />
              <label For="Black"> Black</label>
            </div>
            <div>
              <input type="radio" name="Red" id="Red" />
              <label For="Red"> Red</label>
            </div>
            <div>
              <input type="radio" name="Blue" id="Blue" />
              <label For="Blue"> Blue</label>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 w-[1px] h-screen"></div>
      </div>
      <div className="w-full flex flex-col mt-10">
        <div>
          <h3 className="text-2xl font-semibold">Recommend</h3>
        </div>
        <div className="flex justify-start items-center gap-7 mt-2">
          <button className="border-2 py-2 px-4">All Product</button>
          <button className="border-2 py-2 px-4">Nike</button>
          <button className="border-2 py-2 px-4">Adidas</button>
          <button className="border-2 py-2 px-4">Puma</button>
          <button className="border-2 py-2 px-4">Vans</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
