import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.updateWelcomeMsg('Welcome! Three seconds have passed')
    }, 3000)
  }

  render() {
    return (
      <div>
        <p>{this.props.welcomeMsg}</p>
      </div>
    )
  }
}
