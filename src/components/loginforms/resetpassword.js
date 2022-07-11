import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { CenterContainerCard } from 'components/centercontainercard';
import { Input, Form, FormField, Box, Button, View } from 'blocks';
import { showToast } from 'utils/ui';

export default class ResetPassword extends React.Component {
    handleResetPasswordClick = () => {
        const input = this.getUserInput();
        if (this.validateUserInput(input)) {
            this.props.onResetPasswordClick(input);
        }
    }

    getUserInput() {
        const confirmpassword = document.getElementById('confirmpassword').value;
        const password = document.getElementById('password').value;
        return {
            confirmpassword,
            password
        };
    }

    validateUserInput({ confirmpassword, password }) {
        if (!password.trim()) {
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
                <CenterContainerCard cols={5} className="loginpage">
                    <Box className='border-box loginformContainer'>
                        <Form>
                            <FormField>
                                Please enter the new password
                            </FormField>
                            <FormField>
                                <Input 
                                    id='password'
                                    type="password" 
                                    placeholder="New Password" 
                                    iconType='lock' 
                                />
                            </FormField>
                            <FormField>
                                <Input 
                                    id='confirmpassword'
                                    type="password" 
                                    placeholder="Confirm New Password" 
                                    iconType='lock' 
                                />
                            </FormField>
                            <FormField className='flexible' inline>
                                <Button className='cell no-margin' primary onClick={this.handleResetPasswordClick}>
                                    Reset
                                </Button> 
                            </FormField>
                            <FormField inline onClick={onSigninClick}>
                                Or <View className='inline link'>Sign in!</View>
                            </FormField>
                        </Form>
                    </Box>
                </CenterContainerCard>
            </>
        );
    }
}
ResetPassword.defaultProps = {
    onSigninClick: _.noop,
    onResetPasswordClick: _.noop,
};