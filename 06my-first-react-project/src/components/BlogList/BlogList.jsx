import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { getBlogs } from "../../services/blogService";

//import { blogs } from "../../data/blog-posts.js";
import Blog from "../Blog/Blog";

import "./BlogList.css";

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterdBlogs, setFilterdBlogs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getBlogs().then((blogs) => {
      setBlogs(blogs);
      setFilterdBlogs(blogs);
    });
  }, []);

  const onTyping = (e) => {
    setInputValue(e.target.value);
    const searchedBlogs = blogs.filter((blog) => blog.title.includes(inputValue));
    setFilterdBlogs(searchedBlogs);
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={onTyping} />
      </div>
      <div className="blogList">
        {filterdBlogs.map((post) => (
          <Blog post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

// export class BlogList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogList: [],
//     };
//   }

//   componentDidMount() {
//     getBlogs().then((data) => {
//       this.setState({ blogList: data });
//     });
//   }

//   render() {
//     if (this.state.blogList.length === 0) return <div>Loading</div>;

//     return (
//       <div className="blogList">
//         {this.state.blogList.map((post, index) => (
//           <Blog post={post} key={index} />
//         ))}
//       </div>
//     );
//   }
// }
