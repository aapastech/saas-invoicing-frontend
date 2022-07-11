import React from 'react';
import PaypalExpressBtn from './PayPalExpressCheckOut';
import PropTypes from 'prop-types';

export default class PayPalReact extends React.Component {
    render() {		
        const { amount, currency, onSuccess, onCancel, onError, env, client, description, user } = this.props;
        return (
            <PaypalExpressBtn 
                currency={currency}
                total={amount}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                env={env}
                client={client}
                description={description}
                user={user}
            />
        );
    }  
}

PayPalReact.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    client: PropTypes.shape({
        sandbox: PropTypes.string,
        production: PropTypes.string,
    }).isRequired,
    env: PropTypes.string.isRequired,
    description: PropTypes.string,
    user: PropTypes.string.isRequired,
};

PayPalReact.defaultProps = {
    // onSuccess:  (payment) => {
    //     console.log("Your payment was succeeded!", payment);
    // };	        
    onCancel: (data) => { // User pressed "cancel" or close Paypal's popup! 
        console.log('You have cancelled the payment!', data);
    },
    onError: (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script! 
        // Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js" 
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			 
        console.log("Error!", err);
    },
    currency: 'USD', // or you can set this value from your props or state   
    amount: 50, // This is the total amount (based on currency) to be paid by using Paypal express checkout 
    env: 'sandbox',
}