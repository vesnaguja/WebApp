import React from "react";

import { blogs } from "../../data/blog-posts.js";
import Blog from "../Blog/Blog";

import "./BlogList.css";

export const BlogList = () => {
  return (
    <div className="blogList">
      {
      blogs.map((post, index) => <Blog post={post} key={index} />)
      }
    </div>
  );
};


