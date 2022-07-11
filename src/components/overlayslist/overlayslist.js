import React from 'react';
import PropTypes from 'prop-types';

import { Table, View, Button, Icon } from 'blocks';
import 'styles/overlays.scss';

class OverlaysList extends React.Component {
    handleOnAddOverlays = e => {
        this.props.onAddOverlay();
    }

    getFooterActions() {
        return (
            <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
                onClick={this.handleOnAddOverlays}
            >
                <Icon name='object ungroup outline' /> Add Overlay
            </Button>
        )
    }

    render () {
        const { cols, data } = this.props;
        return (
            <>
                <View className='overlays'>
                    <Table className="full-height flex-y cell" cols={cols} data={data} footerActions={this.getFooterActions()} />
                </View>
            </>
        );        
    }
}

export default OverlaysList;

OverlaysList.propTypes = {
    cols: PropTypes.array,
    data: PropTypes.array,
    onAddOverlay: PropTypes.func.isRequired,
};

OverlaysList.defaultProps = {
    cols: [],
    data: []
};