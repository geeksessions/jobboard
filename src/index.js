import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import DB from './data'

const myReducers = (previousSate = { jobs: [{id: 'lala jorge'}] }, action = false) => {
  let newState = Object.assign({}, previousSate)
  switch (action.type) {
    case 'DATA_CHANGE':
      newState.jobs = action.data
      break
    default: break
  }

  return newState
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

DB.attachStore(store)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))
