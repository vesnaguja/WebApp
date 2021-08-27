//import React, { Component } from "react";
//import "./Header.css";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container justify-content-start">
        <span className="navbar-brand mb-0 h1 text-center">
          <Link to="/">Home</Link>
        </span>

        <span className="navbar-brand mb-0 h1 text-center">
          <Link to="/blogs">Blogs</Link>
        </span>

        <span className="navbar-brand mb-0 h1 text-center">
          <Link to="/about">About</Link>
        </span>
      </div>
    </nav>
  );
};

// class Header extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <header className="header">
//         <h1 className="title">My React Blog</h1>
//       </header>
//     );
//   }
// }


