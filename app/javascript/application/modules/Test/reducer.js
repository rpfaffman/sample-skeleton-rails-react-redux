import * as types from './actionTypes'

const getInitialState = () => ({
  welcomeMsg: 'Welcome!'
})

export default (state = getInitialState(), action = {}) => {
  switch (action.type) {
    case types.UPDATE_WELCOME_MSG:
      return { welcomeMsg: action.msg }
    default:
      return state
  }
}
