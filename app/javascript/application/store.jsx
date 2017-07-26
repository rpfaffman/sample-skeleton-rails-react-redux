import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules/reducers'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore)

export const initializeStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducers', () => {
      const nextRootReducer = require('./modules/reducers') // eslint-disable-line global-require

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const initializedStore = initializeStore({})
export default initializedStore
