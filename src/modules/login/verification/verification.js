import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { redirectTo } from 'modules';

import { VerificationCodeForm } from 'components/loginforms';

class VerificationCode extends React.Component {

    componentDidMount() {
        if (!this.props.emailAddress) this.handleSignin();
    }

    handleVerificationCodeSubmit = (code) => {
        const { redirectTo, onVerificationCodeSubmit } = this.props;
        onVerificationCodeSubmit(code, redirectTo);
    }

    handleResendVerificationCode = () => {
        const { onResendVerificationCode, emailAddress } = this.props;
        onResendVerificationCode(emailAddress);
    }

    handleSignin = () => redirectTo(this.props.signinPath)

    render () {
        return (
            <>
                <VerificationCodeForm 
                    emailAddress={this.props.emailAddress}
                    onResendVerificationCode={this.handleResendVerificationCode}
                    onSubmitVerificationCode={this.handleVerificationCodeSubmit}
                    onSigninClick={this.handleSignin}
                />
            </>
        );        
    }
}

export default withRouter(VerificationCode);

VerificationCode.propTypes = {
    signinPath: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
};
VerificationCode.defaultProps = {
    onForgotPassword: _.noop,
};