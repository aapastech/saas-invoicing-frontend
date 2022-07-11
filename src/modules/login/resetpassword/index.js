import { connect } from 'react-redux'
import ResetPassword from './resetpassword';
import * as actions from '../actions';

export default connect(
    null,
    (dispatch) => ({
        onResetPassword: (userInput, redirectUrl) => {
            return dispatch(actions.onResetPassword(userInput, redirectUrl));
        },
    })
)(ResetPassword);
  