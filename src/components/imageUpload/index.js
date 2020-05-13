import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Modal, Button } from 'blocks';

export default class ImageUpload extends React.Component {
    constructor() {
        super();
        this.handleFileChange = this.handleFileChange.bind(this);
        this.getModalContent = this.getModalContent.bind(this);
    }

    handleFileChange(e) {
        const file = e.target.files[0];
        this.props.onUpload(file);
    }

    getModalContent() {
        return (
            <>
                <Button
                    content="Choose an image file"
                    labelPosition="left"
                    icon="file"
                    onClick={e => document.getElementById('file-upload').click()}
                />
                <input
                    id="file-upload"
                    type="file"
                    hidden
                    onChange={this.handleFileChange}
                    accept="image/png, image/jpeg, image/jpg, image/gif, image/bmp"
                />
            </>
        )
    }

    render() {
        return(
            <>
                <Modal 
                    open
                    content={this.getModalContent} 
                    onClose={this.props.onCancel}
                />
            </>
        );
    }
}

ImageUpload.propTypes = {
    onUpload: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

ImageUpload.defaultProps = {
    onUpload: _.noop,
    onCancel: _.noop,
};