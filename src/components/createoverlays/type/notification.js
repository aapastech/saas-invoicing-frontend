import React from 'react';
import { CallToAction, OptIn, Timer } from '../category/notification';
import ShowMappedCategoryComponent from './renderer';

const categoryComponentMap = {
  'calltoaction': CallToAction,
  'optin': OptIn,
  // 'timer': Timer,
};

const OverlayNotification = props => 
  <ShowMappedCategoryComponent {...props} renderers={categoryComponentMap} />;
  
export default OverlayNotification;
