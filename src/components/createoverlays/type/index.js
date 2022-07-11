import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ImageHolderGround } from "blocks";
import SelectEntity from '../selectentity';

export default class Type extends React.Component {
    render() {
        const { onSelect, type, caption, img } = this.props;
        return(
            <ImageHolderGround 
                caption={caption}
                image={{src: img }} 
                footer={<SelectEntity onSelect={e => onSelect(type)} />} 
            />
        );
    }
}

Type.propTypes = {
    onSelect: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired, 
    caption: PropTypes.string.isRequired,
    img: PropTypes.isRequired,
};
Type.defaultProps = {
    onSelect: _.noop,
};