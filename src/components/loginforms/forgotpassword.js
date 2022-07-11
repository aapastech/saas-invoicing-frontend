import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { showToast } from 'utils/ui';

import { CenterContainerCard } from 'components/centercontainercard';
import { Input, Form, FormField, Box, Button, ButtonGroup, ButtonOr } from 'blocks';

export default class ForgotPassword extends React.Component {
    handleForgotPasswordClick = () => {
        const input = this.getUserInput();
        if (this.validateUserInput(input)) {
            this.props.onForgotPassword(input);
        }
    }

    getUserInput() {
        const useremail = document.getElementById('useremail').value;
        return {
            useremail,
        };
    }

    validateUserInput({ useremail }) {
        if (!useremail.trim()) {
            showToast('Please enter your Email', 'error');
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
                                Please enter your registered email ID
                            </FormField>
                            <FormField>
                                <Input 
                                    id='useremail'
                                    type="text" 
                                    placeholder="Email" 
                                    iconType='user' 
                                />
                            </FormField>
                            <FormField>
                                <ButtonGroup>
                                    <Button onClick={onSigninClick}>To Sign in</Button>
                                    <ButtonOr />
                                    <Button primary onClick={this.handleForgotPasswordClick}>
                                        Get Verification Code
                                    </Button>
                                </ButtonGroup>
                            </FormField>
                        </Form>
                    </Box>
                </CenterContainerCard>
            </>
        );
    }
}
ForgotPassword.defaultProps = {
    onForgotPassword: _.noop,
};