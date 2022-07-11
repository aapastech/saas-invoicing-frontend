import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import { Button } from 'blocks';

const popover = {
    position: 'absolute',
    zIndex: '2',
};
const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
};
export default class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
    }

    bodyClickHandler = (e) => {
        const ancestorColorPicker = e.target.closest('#colorPicker');
        if (ancestorColorPicker === null) {
            this.handleClose();
        }
    }

    addCloseEventListener = () => {
        document.body.addEventListener('click', this.bodyClickHandler);
    }

    removeCloseEventListener = () => {
        document.body.removeEventListener('click', this.bodyClickHandler);
    }

    componentWillUnmount() {
        this.removeCloseEventListener();
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
        this.addCloseEventListener();
    };

    handleClose = (e) => {
        this.setState({ displayColorPicker: false });
        this.removeCloseEventListener();
    };

    handleChange = (color, e) => {
        this.props.onChange(color[this.props.format]);
    };

    render() {
        const { displayColorPicker } = this.state;
        const { btnText, btnColor, value } = this.props;
        return(
            <>
            <Button color={btnColor} onClick={this.handleClick}>{btnText}</Button>
            {displayColorPicker && (
                <div id='colorPicker' style={ popover }>
                    <ChromePicker onChangeComplete={this.handleChange} color={value} />
                </div>
            )}
            </> 
        );
    }
}
ColorPicker.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
};
ColorPicker.defaultProps = {
    value: '#ffffff',
    format: 'hex',
    btnText: 'Pick Color',
    btnColor: '',
};