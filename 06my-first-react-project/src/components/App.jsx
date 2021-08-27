import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Header } from "./Header/Header.jsx";
import { BlogList } from "./BlogList/BlogList.jsx";
import { HomePage } from "./HomePage/HomePage";
import { AboutPage } from "./AboutPage/AboutPage";
import { BlogPage } from "./BlogPage/BlogPage";

const NotFoundPage = () => <div>Page not found</div>;

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/blog/:id/" component={BlogPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
