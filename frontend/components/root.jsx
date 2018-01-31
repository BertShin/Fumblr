import React from 'react';
import MainPage from './main_page';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <MainPage />
      </div>
    </HashRouter>
  </Provider>

);

export default Root;
