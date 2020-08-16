import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { CenterContainerCard } from 'components/centercontainercard';
import { Input, Form, FormField, Box, Button, View } from 'blocks';
import { showToast } from 'utils/ui';

export default class Login extends React.Component {
    state = {
        isRememberActive: false,
    };

    handleRememberClick = () => {
        this.setState({ isRememberActive: !this.state.isRememberActive });
    }

    handleLoginClick = () => {
        const input = this.getUserInput();
        if (this.validateUserInput(input)) {
            this.props.onLogin(input);
        }
    }

    getUserInput() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const { isRememberActive } = this.state;
        return {
            username,
            password,
            remember: isRememberActive
        };
    }

    validateUserInput({ username, password }) {
        if (!username.trim()) {
            showToast('Username cannot be empty', 'error');
            return false;
        } else if (!password.trim()) {
            showToast('Password cannot be empty', 'error');
            return false;
        }
        return true;
    }

    render() {
        const { isRememberActive } = this.state;
        const { onSignupClick, onForgotPasswordClick } = this.props;
        return (
            <>
                <CenterContainerCard className="loginpage" cols={5}>
                    <Box className='border-box loginformContainer'>
                        <Form onSubmit={this.handleLoginClick}>
                            <FormField>
                                Welcome back!
                            </FormField>
                            <FormField>
                                <Input 
                                    id='username'
                                    type="text" 
                                    placeholder="Username/Email" 
                                    iconType='user' 
                                />
                            </FormField>
                            <FormField>
                                <Input 
                                    id='password'
                                    type="password" 
                                    placeholder="Password" 
                                    iconType='lock' 
                                />
                            </FormField>
                            <FormField inline className='text flexible-center-equidistant-cells'>
                                <Button type='button' toggle active={isRememberActive} 
                                    onClick={this.handleRememberClick}>
                                    Remember me
                                </Button> 
                                <FormField inline onClick={onForgotPasswordClick}>
                                    <View className='inline link'>Forgot password?</View>
                                </FormField>
                            </FormField>
                            <FormField className='flexible' inline>
                                <Button type='submit' className='cell no-margin' primary>
                                    Login
                                </Button> 
                            </FormField>
                            <FormField inline onClick={onSignupClick}>
                                Or <View className='inline link'>register now!</View>
                            </FormField>
                        </Form>
                    </Box>
                </CenterContainerCard>
            </>
        );
    }
}
Login.defaultProps = {
    onRemember: _.noop,
    onSignupClick: _.noop,
    onForgotPasswordClick: _.noop,
    onLogin: _.noop,
};