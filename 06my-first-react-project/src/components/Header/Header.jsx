import React, { Component } from "react";
import "./Header.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: "Pera",
    };
  }

  render() {
    const { isLoggedIn, user } = this.state;

    let onClickCallback = () => {this.setState({ isLoggedIn: true})}
    let buttonText = "LogIn";

    if (isLoggedIn) {
      onClickCallback = () => {this.setState({ isLoggedIn: false})}
      buttonText = "LogOut";
    }

    return (
      <header className="header">
        <h1 className="title">My React Blog</h1>
        {isLoggedIn ? <p>{user}</p> : null}
        <button onClick={onClickCallback}>{buttonText}</button>
      </header>
    );
  }
}

export default Header;
