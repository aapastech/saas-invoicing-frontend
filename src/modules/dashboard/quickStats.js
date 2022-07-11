import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from './selectors';

class QuickStats extends React.Component {
    render() {
        const { stats } = this.props;
        return(
            <>
                {_.map(stats, ({ name, value }, index) => (
                    <div key={`stat-${index}`} className='stats-box cell flex-y flexible-hvcentered'>
                        <h5 className='stat-name'>{name}</h5>
                        <span className='stat-value font-size-35'>{value}</span>
                    </div>
                ))}
            </>
        );
    }
}

QuickStats.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
    })),
};
QuickStats.defaultProps = {
    stats: [],
};

export default connect(
    state => ({
        stats: selectors.getStats(state),
    }),
)(QuickStats);