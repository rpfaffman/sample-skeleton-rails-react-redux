import { connect } from 'react-redux'
import Test from '../../components/Test'
import { updateWelcomeMsg } from '../../modules/Test/actions'

const mapStateToProps = state => ({
  ...state.test
})

const mapDispatchToProps = dispatch => ({
  updateWelcomeMsg: msg => {
    dispatch(updateWelcomeMsg(msg))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
