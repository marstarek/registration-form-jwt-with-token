import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow glass">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-rose-600">landing</a>
      </div>

      <button className="btn btn-ghost btn-circle">
        <div className="indicator">

          <Link to='/home'>Home</Link>


        </div>

      </button>


    </div>)
}

export default Navbar