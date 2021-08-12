import { Fragment } from 'react';

import Header from './Header/Header.jsx';
import {BlogList} from './BlogList/BlogList.jsx'

function App() {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;
