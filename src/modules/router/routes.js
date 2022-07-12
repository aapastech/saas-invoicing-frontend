import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

export default function RoutesCollection() {
  return (
    <Router history={history}>
      <Routes>
        <Route path={constants.BASE_PATH} element={<Navigate replace to={constants.DASHBOARD} />} />
        <Route path={constants.LOGIN} element={
          <Login 
            redirectTo={constants.DASHBOARD} 
            signupPath={constants.SIGN_UP} 
            forgotpasswordPath={constants.FORGOT_PASSWORD} 
          />
        } />
        <Route path={constants.SIGN_UP} element={
          <Signup redirectTo={constants.DASHBOARD} signinPath={constants.LOGIN} />
        } />
        <Route path={constants.FORGOT_PASSWORD} element={
          <ForgotPassword redirectTo={constants.VERIFICATION} signinPath={constants.LOGIN} />
        } />
        <Route path={constants.VERIFICATION} element={
          <Verification redirectTo={constants.RESET_PASSWORD} signinPath={constants.LOGIN} />
        } />
        <Route path={constants.RESET_PASSWORD} element={
          <ResetPassword redirectTo={constants.DASHBOARD} signinPath={constants.LOGIN} />
        } />
        <Route path={constants.DASHBOARD} element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path={constants.LIST_LINKS} element={
          <PrivateRoute>
              <LinksList />
          </PrivateRoute>
        } />
        <Route path={constants.NEW_OVERLAY} element={
          <PrivateRoute>
              <CreateOverlay 
                customizeOverlayPath={constants.CUSTOMIZE_OVERLAY} 
                overlaysListPath={constants.LIST_OVERLAY} 
              />
          </PrivateRoute>
        } />
        <Route path={constants.EDIT_OVERLAY} element={
          <PrivateRoute>
              <CustomizeOverlay overlayListPath={constants.LIST_OVERLAY} />
          </PrivateRoute>
        } />
        <Route path={constants.LIST_OVERLAY} element={
          <PrivateRoute>
              <OverlaysList 
                editOverlayPath={constants.CUSTOMIZE_OVERLAY} 
                newOverlayPath={constants.NEW_OVERLAY} 
              />
          </PrivateRoute>
        } />
        <Route path={constants.USER_PROFILE} element={
          <PrivateRoute>
              <UserProfile />
          </PrivateRoute>
        } />
        <Route path={constants.LOGOUT} element={
          <PrivateRoute>
              <Logout signinPath={constants.LOGIN} />
          </PrivateRoute>
        } />
        <Route path={constants.ADMIN} element={
          <PrivateRoute>
              <Admin />
          </PrivateRoute>
        } />
        <Route path={constants.OVERLAY_TYPES_REDESIGNING} element={
          <OverlayType />
        } />
        <Route path='*' element={<Navigate replace to={constants.LOGIN} />} />
      </Routes>
    </Router>
  );
}