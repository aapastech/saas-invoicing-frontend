import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { CenterContainerCard } from 'components/centercontainercard';
import { Input, Form, FormField, Box, Button, View, FormInput, FormGroup } from 'blocks';
import { showToast } from 'utils/ui';

export default class Signup extends React.Component {
    handleSignupClick = () => {
        const input = this.getUserInput();
        if (this.validateUserInput(input)) {
            this.props.onSignup(input);
        }
    }

    getUserInput() {
        const form = document.forms[0];
        const firstname = form.querySelector('#firstName').value;
        const lastname = form.querySelector('#lastName').value;
        const username = form.querySelector('#username').value;
        const confirmpassword = form.querySelector('#confirmpassword').value;
        const password = form.querySelector('#password').value;
        return {
            username,
            password,
            confirmpassword,
            firstname,
            lastname
        };
    }

    validateUserInput({ username, password, confirmpassword, firstname }) {
        if (!firstname.trim()) {
            showToast('Please enter your name', 'error');
            return false;
        } else if (!username.trim()) {
            showToast('Username cannot be empty', 'error');
            return false;
        } else if (!password.trim()) {
            showToast('Password cannot be empty', 'error');
            return false;
        } else if (!confirmpassword.trim()) {
            showToast('Confirm password cannot be empty', 'error');
            return false;
        } else if (confirmpassword.trim() !== password.trim()) {
            showToast('Password and Confirm password do not match', 'error');
            return false;
        }
        return true;
    }

    render() {
        const { onSigninClick } = this.props;
        return (
            <>
                <CenterContainerCard cols={6} className="loginpage">
                    <Box className='border-box loginformContainer'>
                        <Form>
                            <FormField>
                                Creating an account is quick and easy!
                            </FormField>
                            <FormGroup widths='equal'>
                                <FormInput 
                                    id='firstName'
                                    fluid 
                                    placeholder='First name' 
                                />
                                <FormInput 
                                    id='lastName'
                                    fluid 
                                    placeholder='Last name' 
                                />
                            </FormGroup>
                            <FormField>
                                <Input 
                                    id='username'
                                    type="text" 
                                    placeholder="Email" 
                                />
                            </FormField>
                            <FormField>
                                <Input 
                                    id='password'
                                    type="password" 
                                    placeholder="Password" 
                                />
                            </FormField>
                            <FormField>
                                <Input 
                                    id='confirmpassword'
                                    type="password" 
                                    placeholder="Confirm Password" 
                                />
                            </FormField>
                            <FormField className='flexible' inline>
                                <Button className='cell' primary onClick={this.handleSignupClick}>
                                    Register
                                </Button> 
                            </FormField>
                            <FormField inline onClick={onSigninClick}>
                                Or <View className='inline link'>Sign in.</View>
                            </FormField>
                        </Form>
                    </Box>
                </CenterContainerCard>
            </>
        );
    }
}
Signup.defaultProps = {
    onSignup: _.noop,
    onSigninClick: _.noop,
};