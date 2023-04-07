import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div>
          <div className="w-full h-12 bg-blue-700 flex drop-shadow-xl">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 m-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <Link to="/dish-restaurant">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 m-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Link>
          </div>
      </div>
    );
  }
  
  export default Navbar;