import React from 'react';
import PropTypes from 'prop-types';

export default class ShowMappedCategoryComponent extends React.Component {
    render() {
        const { category, template, renderers } = this.props;
        const ComponentMapped = renderers[category];
        return(
            <ComponentMapped template={template} />
        );
    }
}
ShowMappedCategoryComponent.propTypes = {

};
ShowMappedCategoryComponent.defaultProps = {

};