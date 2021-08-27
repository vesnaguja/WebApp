import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBlog } from "../../services/blogService";

import './BlogPage.css';

export const BlogPage = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    getBlog(id).then((data) => setBlog(data));
  }, [id]);

  return ( 
    <div className="single-blog-wrapper ">
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};


