import { connect } from 'react-redux'
import Login from './login';
import * as actions from '../actions';

export default connect(
    (state) => ({
  
    }),
    (dispatch) => ({
      onLogin: (userInput, redirectUrl) => dispatch(actions.onLogin(userInput, redirectUrl)),
    })
)(Login);
  