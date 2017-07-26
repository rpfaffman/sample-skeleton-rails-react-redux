/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory as history, Router } from 'react-router'
import store from '../application/store'
import routes from '../application/routes'
import '../application/styles'

document.addEventListener("DOMContentLoaded", event => { 
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </div>,
    document.getElementById('app-container')
  )
})
