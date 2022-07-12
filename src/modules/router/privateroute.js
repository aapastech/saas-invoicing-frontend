import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import constants from './constants';

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

      if (!isAuthenticated) return (
        <Route path='*' element={<Navigate replace to={constants.LOGIN} />} />
      );

      return (
        <MainBody>
          {children}
        </MainBody>
      );
    }
}

PrivateRoute.propTypes = {
  onGetAuthenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  onRedirectToLogin: _.noop,
};
