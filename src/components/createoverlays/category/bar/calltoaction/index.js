import React from 'react';
import _ from 'lodash';

import ShowMappedTemplateComponent from 'components/createoverlays/category';

import Template1 from './1.js';
import Template2 from './2.js';
import Template3 from './3.js';

const templateComponentMap = {
  '1': Template1,
  '2': Template2,
  '3': Template3,
};

const OverlayBarCallToAction = props => {
  const { template } = props;
  return (
    <ShowMappedTemplateComponent 
      template={template || 1} 
      renderers={templateComponentMap} 
    />
  );
};

export default OverlayBarCallToAction;
