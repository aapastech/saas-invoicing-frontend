import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from 'components/imageUpload';

export default class Image extends React.Component {
    componentWillUnmount() {
        this.props.onClearImageLink();
    }

    componentDidUpdate() {
        const { imageLink } = this.props;
        if(imageLink) {
            this.props.onNewFileLink(imageLink);
        }
    }
    
    render() {
        return(
            <ImageUpload onUpload={this.props.onUpload} onCancel={this.props.onCancel} />
        );
    }
}

Image.propTypes = {
    onNewFileLink: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onUpload: PropTypes.func.isRequired,
    onClearImageLink: PropTypes.func.isRequired,
    imageLink: PropTypes.string,
};