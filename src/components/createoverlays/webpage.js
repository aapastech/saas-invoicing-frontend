import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { SitePlaceholder } from 'blocks';

export default class WebPage extends React.Component {
    render() {
        const { size, children } = this.props;
        return(
            <SitePlaceholder className='flexible cell' size={size}>
                {children}
            </SitePlaceholder>
        );
    }
}
WebPage.propTypes = {

};
WebPage.defaultProps = {

};