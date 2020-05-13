import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Link } from 'blocks';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';

export default class LinkWithCopy extends React.Component {
    constructor() {
        super();
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        copyToClipboard(this.props.url);
        showToast(`Link copied to clipboard`, 'success');
    }

    render() {
        return(
            <>
                <Link url={this.props.url} maxLength={50} />
                {this.props.hasCopy && (
                    <>
                        <Icon 
                            onClick={this.handleCopy} 
                            title='Copy'
                            className='m-l-5 pointer' 
                            name='copy' 
                            color='blue' 
                            link
                        />
                    </>
                )}
            </>
        );
    }
}
LinkWithCopy.propTypes = {
    url: PropTypes.string.isRequired,
    hasCopy: PropTypes.bool,
};
LinkWithCopy.defaultProps = {
    hasCopy: false,
};