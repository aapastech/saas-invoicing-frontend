import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { redirectTo } from 'modules';
import 'styles/loginform.scss';

import { LoginForm } from 'components/loginforms';

class Login extends React.Component {
    handleRemember = (remember) => {

    }

    handleLogin = (userInput) => {
        const { redirectTo, onLogin } = this.props;
        const query = new URLSearchParams(this.props.location.search);
        const redirectUrlFromSearch = query.get('redirectUrl');
        onLogin(userInput, redirectUrlFromSearch || redirectTo);
    }

    handleSignup = () => redirectTo(this.props.signupPath)

    handleForgotPassword = () => redirectTo(this.props.forgotpasswordPath)


    render () {
        return (
            <>
                <LoginForm 
                    onLogin={this.handleLogin}
                    onRemember={this.handleRemember} 
                    onSignupClick={this.handleSignup}
                    onForgotPasswordClick={this.handleForgotPassword}
                />
            </>
        );        
    }
}

export default withRouter(Login);
Login.propTypes = {
    signupPath: PropTypes.string.isRequired,
    forgotpasswordPath: PropTypes.string.isRequired,
};
Login.defaultProps = {
    onLogin: _.noop,
};