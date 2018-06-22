import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import DB from './data'

const myReducers = (previousSate = { jobs: [], sort: '1'}, action = false) => {
  let newState = Object.assign({}, previousSate);
  switch (action.type) {

    case 'DATA_CHANGE':
      newState.jobs = action.payload;
      break;
    
    case 'toggle_sort':
      newState.sort = action.payload;
      break;

    case 'toggle_sort_by_poster':
    
      let stepCounter = ++previousSate.sortPoster;

      if (stepCounter > 3) {
        stepCounter = 1;
      }
      
      newState.sortPoster = stepCounter;
      break;
    
    default: break;
  }

  return newState
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

DB.attachStore(store)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))
