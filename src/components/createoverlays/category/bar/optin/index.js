import React from 'react';
import _ from 'lodash';

import ShowMappedTemplateComponent from 'components/createoverlays/category';

import Template1 from './1.js';
import Template2 from './2.js';

const templateComponentMap = {
  '1': Template1,
  '2': Template2,
};

export default function ShowOptinTemplates(props) {
  const { template } = props;
  return (
    <ShowMappedTemplateComponent 
      template={template || 1} 
      renderers={templateComponentMap} 
    />
  );
}