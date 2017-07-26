import React, { Component } from 'react'
import { Link } from 'react-router'
import './styles'

export default class App extends Component {
  render() {
    const { state, dispatch, children } = this.props
    return (
      <div>
        <h1>React App Container</h1>
        <Link to='/test'>
          Click here for test
        </Link>
        {children && React.cloneElement(children, { state, dispatch })}
      </div>
    )
  }
}
