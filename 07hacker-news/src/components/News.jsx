import React, { Component } from "react";
import Post from "./Post";

class News extends Component {
  render() {
    return (
      <div>
        {this.props.stories.map((article, index) => (
          <Post number={index + 1} story={article} key={article.id}></Post>
        ))}
      </div>
    );
  }
}

export default News;
