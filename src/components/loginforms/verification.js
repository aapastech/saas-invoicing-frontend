import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { CenterContainerCard } from 'components/centercontainercard';
import { Input, Form, FormField, Box, Button, ButtonGroup, ButtonOr, View } from 'blocks';
import { showToast } from 'utils/ui';

export default class Verification extends React.Component {
    handleVerificationCodeSubmitClick = () => {
        const input = this.getUserInput();
        if (this.validateUserInput(input)) {
            this.props.onSubmitVerificationCode(input.verificationCode);
        }
    }

    getUserInput() {
        const verificationCode = document.getElementById('verificationCode').value;
        return {
            verificationCode,
        };
    }

    validateUserInput({ verificationCode }) {
        if (!verificationCode.trim()) {
            showToast('Please enter the verification code', 'error');
            return false;
        }
        return true;
    }

    render() {
        const { onResendVerificationCode, emailAddress, onSigninClick } = this.props;
        return (
            <>
                <CenterContainerCard cols={6} className="loginpage">
                    <Box className='border-box loginformContainer'>
                        <Form>
                            <FormField>
                                Please enter the verification code sent to <View className='inline link'>{emailAddress}</View>
                            </FormField>
                            <FormField>
                                <Input 
                                    id='verificationCode'
                                    type="text" 
                                    placeholder="Verification Code" 
                                    iconType='user secret' 
                                />
                            </FormField>
                            <FormField>
                                <ButtonGroup>
                                    <Button onClick={onResendVerificationCode}>Resend</Button>
                                    <ButtonOr />
                                    <Button primary onClick={this.handleVerificationCodeSubmitClick}>
                                        Submit
                                    </Button>
                                </ButtonGroup>
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
Verification.propTypes = {
    emailAddress: PropTypes.string.isRequired,
};
Verification.defaultProps = {
    onResendVerificationCode: _.noop,
    onSubmitVerificationCode: _.noop,
    onSigninClick: _.noop,
};