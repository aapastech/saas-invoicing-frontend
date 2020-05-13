import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'blocks';
import Link from 'components/link';
import * as actions from './actions';
import * as selectors from './selectors';
import { timezones } from './constants';

class AccountDetails extends React.Component {
    componentDidMount() {
        this.props.getAccountDetails();
    }

    handleEdit = () => {
        this.props.onToggleEdit();
    };

    render() {
        const { accountDetails } = this.props;
        return(
            <>
                <div className='flexible-center-equidistant-cells'>
                    <h3>Account Details</h3>
                    <Icon
                        onClick={this.handleEdit} 
                        className='pointer' 
                        name='edit' 
                        color='black' 
                    />
                </div>
                <div className='flex-y m-top-10'>
                    {_.map(accountDetails, (detail, index) => {
                        let { value, type } = detail;
                        if(detail.label === 'Timezone') {
                            value = _.find(timezones, { value: value}).text;
                            value = `${detail.value} / ${value}`;
                        }
                        if(type === 'link') {
                            value = <Link url={value} hasCopy maxLength={35} />
                        }
                        return (
                            <div key={`detail-${index}`} className='detail flexible p-6-3'>
                                <div className='detail-label cell font-bold'>{detail.label}</div>
                                <div className='detail-value cell-w4'>{value}</div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}
AccountDetails.propTypes = {
    accountDetails: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
    getAccountDetails: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
};
AccountDetails.defaultProps = {
    accountDetails: [],
    getAccountDetails: _.noop,
    onToggleEdit: _.noop,
};

export default connect(function mapStateToProps(state) {
    return {
        accountDetails: selectors.getProfileDetails(state),
    };
}, function matDispatchToProps(dispatch) {
    return {
        getAccountDetails: () => dispatch(actions.getAccountDetails()),
        onToggleEdit: () => dispatch(actions.toggleEdit()),
    }
})(AccountDetails);