import React from 'react';

export default function ShowMappedTemplateComponent (props) {
  const { template, renderers } = props;
  const ComponentMapped = renderers[template];
  return (
    <ComponentMapped />
  );
};
