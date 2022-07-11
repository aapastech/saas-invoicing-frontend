import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import { FormField, PayPalReact } from 'blocks';
import { showToast } from 'utils/ui';

class Membership extends React.Component {
    handlePaypalSuccess = (paypal) => {
        showToast('Payment successful, Congratulations you have upgraded your membership', 'success');
        this.props.onMembershipUpdateSuccess(paypal);
    }
    
    handlePaypalCancel = (error) => {
        showToast('Payment cancelled, Please try again to upgrade your membership. \nIn case of any issues please contact us at +917503790442', 'warning');
    }
    
    handlePaypalError = (error) => {
        showToast('Hi, we noticed you are facing some issues in transacting at paypal. \nPlease try again, and in case you need help, please contact us at +917503790442', 'error');
    }

    render() {
        const { membership, username } = this.props;

        const client = {
            production: '',
            sandbox: '',
        };

        if(process.env.NODE_ENV === 'production') {
            client.production = process.env.REACT_APP_PAYPAL_production;
            client.sandbox = process.env.REACT_APP_PAYPAL_sandbox;
        } else {
            client.production = process.env.REACT_APP_PAYPAL_production;
            client.sandbox = process.env.REACT_APP_PAYPAL_sandbox;
        }

        const env = 'sandbox';
        // const env = process.env.NODE_ENV === 'production' ? 'production': 'sandbox';

        return(
            <>
                <div className='flexible-center-equidistant-cells'>
                    <h3>Membership</h3>
                </div>
                <div className='flex-y m-top-20'>
                    <div key='detail' className='detail flexible p-6-3'>
                        <div className='detail-label cell font-bold'>Current plan:</div>
                        <div className='detail-value cell-w2'>{membership.planName}</div>
                    </div>
                    <div key='detail' className='detail flexible p-6-3'>
                        <div className='detail-label cell font-bold'>Total Link(s) limit:</div>
                        <div className='detail-value cell-w2'>{membership.linksLimit}</div>
                    </div>
                    <div key='detail' className='detail flexible p-6-3'>
                        <div className='detail-label cell font-bold'>Create Overlay(s) limit:</div>
                        <div className='detail-value cell-w2'>{membership.overlaysLimit}</div>
                    </div>
                    <div key='detail' className='detail flexible p-6-3'>
                        <div className='detail-label cell font-bold'>Link sharing limit:</div>
                        <div className='detail-value cell-w2'>{membership.shareLinkLimit} per month</div>
                    </div>
                    {membership.type === 'basic' && (
                        <>
                            <div key='detail' className='detail flexible p-6-3 m-top-30'>
                                <div className='detail-value cell-w2'>
                                    <FormField className='flexible' inline>
                                        <h4>Upgrade to Pro membership (unlimited usage) at just {membership.upgradeCurrencySymbol}{membership.upgradePrice}.</h4>
                                    </FormField>
                                </div>
                            </div>
                            <div key='detail' className='detail flexible p-6-3'>
                                <div className='detail-label cell font-bold'>
                                    <PayPalReact
                                        amount={membership.upgradePrice}
                                        currency={membership.upgradeCurrency}
                                        onSuccess={this.handlePaypalSuccess}
                                        onError={this.handlePaypalError}
                                        onCancel={this.handlePaypalCancel}
                                        env={env}
                                        client={client}
                                        user={username}
                                        description={`Payyment to upgrade UTV Membership`}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </>
        );
    }
}
Membership.propTypes = {
    membership: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    username: PropTypes.string,
    onMembershipUpdateSuccess: PropTypes.func.isRequired,
};
Membership.defaultProps = {
    onToggleEdit: _.noop,
};

export default connect(function mapStateToProps(state) {
    return {
        membership: selectors.getMembership(state),
        username: selectors.getUserName(state),
    };
}, function matDispatchToProps(dispatch) {
    return {
        onMembershipUpdateSuccess: (payment) => dispatch(actions.onMembershipUpdateSuccess(payment)),
    }
})(Membership);