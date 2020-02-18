import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer
})

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    store.dispatch({ type: 'next' })
  }
})

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    store.dispatch({ type: 'prev' })
  }
});	

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
