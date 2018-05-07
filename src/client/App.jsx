import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';

const App = () => (
  <div>
    <Search />
  </div>
);

export default hot(module)(App);
