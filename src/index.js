import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import rootReducer from './reducers'
import { prev, next } from './reducers/currentSlice'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Use keyboard to next or prev question
const questionsLength = store.getState().questions.length

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    store.dispatch(next(questionsLength))
  }
})

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    store.dispatch(prev(questionsLength))
  }
});	