import { connect } from 'react-redux'
import Signup from './signup';
import * as actions from '../actions';

export default connect(
    (state) => ({
  
    }),
    (dispatch) => ({
      onSignup: (userInput, redirectUrl) => dispatch(actions.onSignup(userInput, redirectUrl)),
    })
)(Signup);
  