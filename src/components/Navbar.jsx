import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);

  const handleLogout = () => {
    console.log('user trying to logout');
    logOut()
    .then(() => {
      alert("Logout successful.")
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="navbar">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{user && user.displayName}</h2>
      </div>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-accent"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-accent text-lg space-x-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2.5">
        <img className="w-13 rounded-full" src={`${user ? user.photoURL : userImg}`} alt="" />
        { 
          user ? <button onClick={handleLogout} className="btn btn-primary px-8">Logout</button> : <Link to="/auth/login" className="btn btn-primary px-8">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
