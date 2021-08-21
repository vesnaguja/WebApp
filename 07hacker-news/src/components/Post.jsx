import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";

class Post extends Component {
  render() {      
      
  
    return (
      <div className="px-2">
        <ul className="list-group">
          <li className="list-group-item border-0 border-bottom">
            {this.props.number}. {this.props.story.title} ({
            (this.props.story.url.slice(8).split('/'))[0]
            })            

           
            <div>
              <span><IconContext.Provider value={{ color: "gray", className: "global-class-name" }}><FaHeart /></IconContext.Provider>{this.props.story.score} points</span>
              <span>   {this.props.story.by}</span>
              <span>   {this.props.story.time} hours ago</span>
              <span>   {this.props.story.descendants} comments</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Post;
