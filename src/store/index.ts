import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

let finalCreateStore: any

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(applyMiddleware(thunk))(createStore)
} else if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  const { createLogger } = require('redux-logger')
  const { composeWithDevTools } = require('redux-devtools-extension')

  finalCreateStore = compose(
    applyMiddleware(thunk, createLogger()),
    composeWithDevTools()
    // @ts-ignore
  )(createStore)
} else {
  const { createLogger } = require('redux-logger')
  finalCreateStore = compose(applyMiddleware(thunk, createLogger()))(
    createStore
  )
}

export default function configureStore(initialState?: any) {
  return finalCreateStore(rootReducer, initialState)
}
