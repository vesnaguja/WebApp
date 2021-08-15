import React, { Component } from "react";

import { blogs } from "../../data/blog-posts.js";
import Blog from "../Blog/Blog";

import "./BlogList.css";

export class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onCountClick = this.onCountClick.bind(this);
  }

  onCountClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const {count} = this.state;
    return (
      <div className="blogList">
        <span>{count}</span> 
        <button onClick={this.onCountClick}>Click me</button>

        {blogs.map((post, index) => (
          <Blog post={post} key={index} />
        ))}
      </div>
    );
  }
}
