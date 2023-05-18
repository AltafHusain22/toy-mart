import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const menuItems = (
    <>
      <NavLink
        activeclassname="active"
        to="/"
        className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-50  mr-4"
      >
        Home
      </NavLink>
      <NavLink
        activeclassname="active"
        to="/blogs"
        className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-50  mr-4"
      >
        Blog
      </NavLink>
    </>
  );
  const [showMenu, setShowMenu] = useState(false);
  const { user, loggedOutUser, loading } = useContext(AuthContext);
  const location = useLocation();

  // logout
  const handleLogOut =() => {
    if (loading) {
      return (
        <button type="button" className="bg-red-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      );
    }

    loggedOutUser()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  };


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-slate-700 mr-6">
        <Link to="/">
          <span className="font-semibold text-2xl tracking-tight text-white md:ml-[150px]">
            Toys-mart
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-slate-700 border-gray-400 hover:text-slate-700 hover:border-white"
          onClick={toggleMenu}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div className="text-lg lg:flex-grow text-center">{menuItems}</div>

        {/* check if user is logged in */}
        {user ? (
          <div className="flex items-center">
            <div className="avatar mr-4">
              <div className="w-10 rounded-full ring ring-danger ring-offset-base-100 ring-offset-2">
                <div>
                  {user.photoURL && (
                    <img
                      className="tooltip hover:tooltip-visible"
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="inline-block px-6 py-4  leading-none border rounded text-slate-100 font-bold hover:bg-black hover:border-1 hover:border-b-gray-100  mt-4 lg:mt-0 mr-4   btn btn-outline"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              to="/login"
              className="inline-block px-6 py-4  leading-none border rounded text-slate-100 font-bold hover:bg-black hover:border-1 hover:border-b-gray-100  mt-4 lg:mt-0 mr-4   btn btn-outline"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
