import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { 
  Login, Logout, Signup, ForgotPassword, Verification, Dashboard, ResetPassword, 
  UserProfile, OverlaysList, LinksList, CreateOverlay, OverlayType, CustomizeOverlay, 
  Admin, 
} from 'modules';
import * as actionTypes from './actiontypes';
import constants from './constants';
import PrivateRoute from './index';

const history = createBrowserHistory();

export function redirectTo(url) {
  history.push(url);
  return {
    type: actionTypes.ON_REIRECT,
    url,
  };
}

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={constants.BASE_PATH}>
          <Redirect to={constants.DASHBOARD} />
        </Route>
        <Route exact path={constants.LOGIN}>
          <Login 
            redirectTo={constants.DASHBOARD} 
            signupPath={constants.SIGN_UP} 
            forgotpasswordPath={constants.FORGOT_PASSWORD} 
          />
        </Route>
        <Route exact path={constants.SIGN_UP}>
          <Signup redirectTo={constants.DASHBOARD} signinPath={constants.LOGIN} />
        </Route>
        <Route exact path={constants.FORGOT_PASSWORD}>
          <ForgotPassword redirectTo={constants.VERIFICATION} signinPath={constants.LOGIN} />
        </Route>
        <Route exact path={constants.VERIFICATION}>
          <Verification redirectTo={constants.RESET_PASSWORD} signinPath={constants.LOGIN} />
        </Route>
        <Route exact path={constants.RESET_PASSWORD}>
          <ResetPassword redirectTo={constants.DASHBOARD} signinPath={constants.LOGIN} />
        </Route>
        <PrivateRoute exact path={constants.DASHBOARD}>
            <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={constants.LIST_LINKS}>
            <LinksList />
        </PrivateRoute>
        <PrivateRoute exact path={constants.NEW_OVERLAY}>
            <CreateOverlay 
              customizeOverlayPath={constants.CUSTOMIZE_OVERLAY} 
              overlaysListPath={constants.LIST_OVERLAY} 
            />
        </PrivateRoute>
        <PrivateRoute exact path={constants.EDIT_OVERLAY}>
            <CustomizeOverlay overlayListPath={constants.LIST_OVERLAY} />
        </PrivateRoute>
        <PrivateRoute exact path={constants.LIST_OVERLAY}>
            <OverlaysList 
              editOverlayPath={constants.CUSTOMIZE_OVERLAY} 
              newOverlayPath={constants.NEW_OVERLAY} 
            />
        </PrivateRoute>
        <PrivateRoute exact path={constants.USER_PROFILE}>
            <UserProfile />
        </PrivateRoute>
        <PrivateRoute exact path={constants.LOGOUT}>
            <Logout signinPath={constants.LOGIN} />
        </PrivateRoute>
        <PrivateRoute exact path={constants.ADMIN}>
            <Admin />
        </PrivateRoute>
        <Route exact path={constants.OVERLAY_TYPES_REDESIGNING}>
          <OverlayType />
        </Route>
        <Redirect to={constants.LOGIN} />
      </Switch>
    </Router>
  );
}