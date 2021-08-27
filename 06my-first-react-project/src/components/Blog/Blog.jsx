import React from "react";
import { Link } from "react-router-dom";

import "./Blog.css";

const Blog = ({post}) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="blogItem">
        {/* <div>This is a single blog with id: {props.id}</div> */}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};

export default Blog;
