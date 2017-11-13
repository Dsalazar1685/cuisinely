import React from 'react';
import renderer from 'react-test-renderer';
import Bookmarks from '../client/components/dashboard/bookmarks.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { initialState } from '../client/reducers/mainReducer.js';
//import store from '../client/store';
const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

it('renders the dashboard component', () => {

  const bookmark = renderer.create(
    <Provider store={store}>
      <Bookmarks />
    </Provider>
  ).toJSON();
  expect(bookmark).toMatchSnapshot();
});
