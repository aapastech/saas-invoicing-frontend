import { connect } from 'react-redux'
import Verification from './verification';
import * as actions from '../actions';

export default connect(
    (state) => ({
      emailAddress: state.userManagement.resetPasswordForUserEmail,
    }),
    (dispatch, state) => ({
      onResendVerificationCode: (emailAddress) => {
        return dispatch(actions.onResendVerificationCode(emailAddress));
      },
      onVerificationCodeSubmit: (code, redirectUrl) => {
        return dispatch(actions.onVerificatonCodeSubmit(code, redirectUrl));
      },
    })
)(Verification);
  