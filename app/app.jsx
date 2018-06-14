'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp'
import * as actions from './actions/actions'

const store = require('configureStore').configure();

import TodoAPI from './api/TodoAPI'

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoApp')
);