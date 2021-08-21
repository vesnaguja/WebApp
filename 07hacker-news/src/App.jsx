import React, { Component } from "react";
import { getTopStories } from "./services/hackerNewsService";

import Header from "./components/Header";
import News from "./components/News";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articleList: [],
      articlesIds: [],
    };
  }

  componentDidMount() {
    getTopStories().then((articlesIds) => {
      this.setState({ articlesIds });

      // setTimeout(() => {
      //   this.setState({ isLoading: false });
      // }, 400);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { articlesIds } = this.state;
    if (prevState.articlesIds.length !== articlesIds.length) {
      const promiseList = [];
      articlesIds.forEach((id) => {
        const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

        promiseList.push(fetch(url).then((res) => res.json()));
      });

      Promise.all(promiseList).then((articleList) => this.setState({ articleList, isLoading: false }));
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading</h1>;
    }

    return (
      <React.Fragment>
        <Header />
        <News stories={this.state.articleList} />       
      </React.Fragment>
    );
  }
}

export default App;
