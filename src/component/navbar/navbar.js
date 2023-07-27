import React from "react";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
  return (
    <div>
      <div class="flex flex-row justify-around h-16 items-center ">
        <div class="text-4xl">MS</div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input border-solid border-2 border-sky-500 w-24 h-7 md:w-auto"
          />
        </div>
        <div class="flex flex-row justify-between items-center gap-5">
          <button className="text-3xl">
            <GrFavorite></GrFavorite>
          </button>
          <button className="text-3xl">
            <BsCart4></BsCart4>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
