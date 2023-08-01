import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <div className="grid grid-cols-4 gap-4">
      <div class="w-60 p-6 bg-slate-500 rounded-xl shadow-sm hover:shadow-xl hover:scale-120 transition-all transform duration-500">
        <img
          class="w-64 object-cover rounded-t-md"
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt=""
        />
        <div class="mt-4">
          <h1 class="text-2xl font-bold text-gray-700">Zebra succulent</h1>
          <p class="text-sm mt-2 text-gray-700">Two sizes</p>

          <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button class="block text-xl font-semibold text-gray-700 cursor-auto">
              $12.99
            </button>
            <button class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
