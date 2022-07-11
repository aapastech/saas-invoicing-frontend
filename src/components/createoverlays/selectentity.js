import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Button } from 'blocks';

export default class SelectEntity extends React.Component {
    render() {
        const { onSelect } = this.props;
        return (
            <Button fluid className='pointer' onClick={onSelect} color='orange'>
                Select
            </Button>
        );
    }
}

SelectEntity.propTypes = {
    onSelect: PropTypes.func.isRequired,
};
SelectEntity.defaultProps = {
    onSelect: _.noop,
};