import React from 'react';
import { CallToAction, OptIn, Timer } from '../category/bar';
import ShowMappedCategoryComponent from './renderer';

const categoryComponentMap = {
  'calltoaction': CallToAction,
  'optin': OptIn,
  // 'timer': Timer,
};

const OverlayBar = props => 
  <ShowMappedCategoryComponent {...props} renderers={categoryComponentMap} />;
  
export default OverlayBar;
