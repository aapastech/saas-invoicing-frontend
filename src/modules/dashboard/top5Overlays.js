import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Table } from 'blocks';
import { connect } from 'react-redux';
import * as selectors from './selectors';

class Top5Overlays extends React.Component {
    cols = [{ 
        align: 'left', 
        label: 'Top 5 Overlays', 
        width: 3,
        labelField: 'name', 
    }, { 
        align: 'center', label: 'Visits', labelField: 'visits', width: 5,
    }];

    render() {
        const { overlays } = this.props;
        return(
            <Table 
                compact='very'
                cols={this.cols} 
                data={overlays} 
                noRecordsLabel="No Overlays found" 
            />
        );
    }
}

Top5Overlays.propTypes = {
    overlays: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
        visits: PropTypes.number,
    })),
};
Top5Overlays.defaultProps = {
    overlays: [],
};

export default connect(
    state => ({
        overlays: selectors.getTop5Overlays(state),
    }),
)(Top5Overlays);