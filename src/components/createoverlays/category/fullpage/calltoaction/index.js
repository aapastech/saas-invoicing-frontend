import React from 'react';
import _ from 'lodash';

import ShowMappedTemplateComponent from 'components/createoverlays/category';

import Template1 from './1.js';

const templateComponentMap = {
  '1': Template1,
};

const OverlayFullPageCallToAction = props => {
  const { template } = props;
  return (
    <ShowMappedTemplateComponent 
      template={template || 1} 
      renderers={templateComponentMap} 
    />
  );
};

export default OverlayPopupCallToAction;
