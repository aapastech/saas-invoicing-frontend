import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";

import MainBody from 'modules/mainbody';

export class PrivateRoute extends React.Component {
    componentDidMount() {
      const { path, isAuthenticated, onRedirectToLogin } = this.props;
      if (!isAuthenticated) {
        onRedirectToLogin(path);
      }
    }

    getIsAuthenticated = () => {
      return true;
    }

    render() {
      const { isAuthenticated, children, ...rest } = this.props;

      if (!isAuthenticated) return null;
      return (
          <Route {...rest}>
            <MainBody>
              {children}
            </MainBody>
          </Route>
      );
    }
}

PrivateRoute.propTypes = {
  onGetAuthenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  onRedirectToLogin: _.noop,
};
