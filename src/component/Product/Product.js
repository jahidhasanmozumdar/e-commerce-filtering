import React from "react";

const Product = (props) => {
  const { img, title, prevPrice, newPrice, company } = props.products;
  return (
    <div className="min-w-[343px] min-h-[477px] max-h-[477px] px-[10px] py-[15px] bg-white rounded-xl shadow-lg border border-gray-500 hover:shadow-xl hover:scale-120 transition-all transform duration-500">
      <div className="min-h-[231px] max-h-[225px] w-full overflow-hidden">
        <img
          className=" object-contain rounded-t-md min-h-[231px] max-h-[225px] w-full relative"
          src={img}
          alt=""
        />
      </div>

      <div className="max-h-[238px]">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
          <p className="text-sm mt-2 text-gray-700">{company}</p>
        </div>

        <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
          <div className="flex flex-col justify-center items-start">
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">
              <small>Prev: </small>
              <del>{prevPrice}</del>
            </button>
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">
              <small>New: </small>
              {newPrice}
            </button>
          </div>
          <button
            type="button"
            className="px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
