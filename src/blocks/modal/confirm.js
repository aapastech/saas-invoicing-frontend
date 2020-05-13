import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'blocks';

export default class Confirmation extends React.Component {
    constructor() {
        super();
        this.getBodyMessage = this.getBodyMessage.bind(this);
    }

    getBodyMessage() {
        return (
            <p>
                {this.props.body}
            </p>
        )
    }

    getFooterActions() {
        const { 
            confirmBtnColor, cancelBtnColor, confirmBtnText, cancelBtnText, onConfirm, 
            onCancel, showConfirm
        } = this.props;
        return (
            <>
                {showConfirm && (
                    <Button color={confirmBtnColor} onClick={onConfirm}>
                        {confirmBtnText}
                    </Button>
                )}
                <Button color={cancelBtnColor} onClick={onCancel}>
                    {cancelBtnText}
                </Button>
            </>
        )
    }

    render() {
        const { isVisible, header, size, onCancel } = this.props;
        return (
            <Modal 
                onClose={onCancel}
                modalSize={size}
                open={isVisible}
                header={header}  
                content={this.getBodyMessage} 
                actions={this.getFooterActions()}
            />
        )
    }
}
Confirmation.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    header: PropTypes.object.isRequired,
    body: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.node,
    ]),
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    confirmBtnColor: PropTypes.string,
    cancelBtnColor: PropTypes.string,
    showConfirm: PropTypes.bool.isRequired,
    size: PropTypes.string,
};

Confirmation.defaultProps = {
    size: undefined,
    body: '',
    confirmBtnText: 'Yes',
    cancelBtnText: 'No',
    confirmBtnColor: 'green',
    cancelBtnColor: 'red',
    showConfirm: true,
};