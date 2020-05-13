import { connect } from 'react-redux';
import { PrivateRoute } from './privateroute';
import { redirectTo } from 'modules';
import constants from './constants';
import { getIsUserAuthenticated } from 'modules/router/selectors';

export default connect(
  state => ({
    isAuthenticated: getIsUserAuthenticated(state),
  }),
  dispatch => ({
    onRedirectToLogin: (redirectBackTo) => redirectTo(`${constants.LOGIN}?redirectUrl=${redirectBackTo}`)
  })
)(PrivateRoute);