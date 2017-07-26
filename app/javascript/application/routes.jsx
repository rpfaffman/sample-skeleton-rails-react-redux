import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import App from './components/App'
import Test from './containers/Test'

const bootstrap = (nextState, replace) => {
  console.log('[!!!] - bootstrap')
}

export default (
  <Route path='/' component={App} onEnter={bootstrap}>
    <Route path='/test' component={Test} />
  </Route>
)
