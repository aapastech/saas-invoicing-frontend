import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { redirectTo } from 'modules';

import { SignupForm } from 'components/loginforms';

class Signup extends React.Component {
    handleSignup = (userInput) => {
        const { redirectTo, onSignup } = this.props;
        onSignup(userInput, redirectTo);
    }

    handleSignin = () => redirectTo(this.props.signinPath)

    render () {
        return (
            <>
                <SignupForm 
                    onSignup={this.handleSignup}
                    onSigninClick={this.handleSignin}
                />
            </>
        );        
    }
}

export default withRouter(Signup);
Signup.propTypes = {
    signinPath: PropTypes.string.isRequired,
};
Signup.defaultProps = {
    onSignup: _.noop,
};