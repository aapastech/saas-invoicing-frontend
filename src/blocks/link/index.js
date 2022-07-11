import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Link extends React.PureComponent {
    render() {
        const { url, maxLength } = this.props;
        const displayUrl = url.length > maxLength ? _.truncate(url, { length: maxLength }) : url;
        return(
            <a href={url} target='_blank' title={url}>{displayUrl}</a>
        );
    }
}
Link.propTypes = {
    url: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
};
Link.defaultProps = {
    maxLength: 35,
}