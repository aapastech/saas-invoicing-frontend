import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Button } from 'blocks';
import * as actions from './actions';
import * as selectors from './selectors';
import 'styles/admin.scss';
import { calculateTotalPayoutAmount, PERCENT_L1, PERCENT_L2 } from './utils';

class Admin extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', label: 'Name', labelField: 'name', 
        }, { 
            align: 'left', label: 'Affiliate(s) L1', labelField: 'affiliate1',
        }, { 
            align: 'left', label: 'Affiliate(s) L2', labelField: 'affiliate2',
        }, { 
            align: 'center', label: `Payouts = ${PERCENT_L1}% x L1 + ${PERCENT_L2}% x L2`, renderer: this.renderTotalPayout,
        }];
    }

    componentDidMount() {
        this.props.getAffiliates();
    }

    renderTotalPayout = (cols, rowData) => {
        return (
            <div>$ {rowData.amount}</div>
        );
    };

    handlePayoutAll = () => {
        this.props.onPayout();
    };

    render() {
        const { affiliates } = this.props;
        return(
            <>
                <Table 
                    className='full-height flex-y cell'
                    compact='very'
                    cols={this.cols} 
                    data={affiliates} 
                    noRecordsLabel="No Affiliates found" 
                />
                <div className='inline flex-self-align-end'>
                    <Button primary inline onClick={this.handlePayoutAll} className='cell no-margin'>
                        Click to pay $ {calculateTotalPayoutAmount(affiliates)}
                    </Button> 
                </div>
            </>
        );
    }
}
Admin.propTypes = {
    affiliates: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        affiliate1: PropTypes.number,
        affiliate2: PropTypes.number,
    })).isRequired,
};

export default connect(
    state => {
        return {
            affiliates: selectors.getAffiliates(state),
        };
    },
    (dispatch) => ({
        onPayout: () => dispatch(actions.onPayout()),
        getAffiliates: () => dispatch(actions.onGetAffiliates()),
    })
)(Admin);