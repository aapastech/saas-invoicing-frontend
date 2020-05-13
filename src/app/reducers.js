import { combineReducers } from 'redux'

import auth from 'modules/router/reducer';
import userManagement from 'modules/login/reducer';
import overlays from 'modules/overlays/reducer';
import links from 'modules/links/reducer';
import dashboard from 'modules/dashboard/reducer';
import profile from 'modules/userprofile/reducer';
import admin from 'modules/admin/reducer';
import image from 'modules/image/reducer';

export default combineReducers({
  auth,
  userManagement,
  overlays,
  links,
  dashboard,
  profile,
  admin,
  image,
})