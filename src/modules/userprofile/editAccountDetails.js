import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import { Input, Form, FormGroup, FormField, Button, Select } from 'blocks';
import { timezones } from './constants';
import { showToast } from 'utils/ui';

class AccountDetails extends React.Component {
    constructor(props) {
        super();
        const name = _.find(props.accountDetails, detail => detail.label === 'Name');
        const timezone = _.find(props.accountDetails, detail => detail.label === 'Timezone');
        this.state = {
            accountDetails: {
                name: name.value,
                timezone: timezone.value,
            },
            showChangePassword: false,
        };
    }

    validateUserInput = () => {
        const {
            showChangePassword,
            accountDetails: {
                name,
                password = '',
                timezone,
                confirmpassword = ''
            }
        } = this.state;

        const saveDetails = {
            name,
            password,
            timezone,
        };
        if (!name.trim()) {
            showToast('Please enter your name', 'error');
            return false;
        } else if (!timezone.trim()) {
            showToast('Please select your prefered timezone', 'error');
            return false;
        }
        if (showChangePassword) {
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
        } else {
            delete saveDetails.password;
        }

        return saveDetails;
    }

    handleChangePassword = (e) => {
        this.setState(prevState => {
            return {
                showChangePassword: !prevState.showChangePassword
            };
        });
        e.preventDefault();
        e.stopPropagation();
    };

    handleSaveAccountDetails = () => {
        const validInput = this.validateUserInput();
        if (validInput) {
            this.props.saveAccountDetails(validInput);
        }
    };

    handleFieldChange = (fieldId, fieldValue) => {
        this.setState(prevState => {
            return {
                accountDetails: {
                    ...prevState.accountDetails,
                    [fieldId]: fieldValue
                }
            }
        })
    }

    render() {
        const { accountDetails: { name, timezone } = {}, showChangePassword } = this.state;
        const { onToggleEdit } = this.props;
        return (
            <>
                <h3>Account Details</h3>
                <div className='flex-y m-top-30'>
                    <Form onSubmit={this.handleSaveAccountDetails}>
                        <FormField>
                            <label>Name</label>
                            <Input
                                type="text"
                                placeholder="Name"
                                iconType='user'
                                value={name}
                                onChange={e => this.handleFieldChange('name', e.target.value)}
                            />
                        </FormField>
                        <FormField>
                            <label>Timezone</label>
                            <Select
                                value={timezone}
                                placeholder='Please select timezone'
                                options={_.map(timezones, (zone, key) => ({ ...zone, key }))}
                                onChange={(e, data) => this.handleFieldChange('timezone', data.value)}
                            />
                        </FormField>
                        <FormField className='flexible pointer' inline>
                            <a href='#' onClick={this.handleChangePassword}>
                                {showChangePassword ? 'Hide Password' : 'Change password?'}
                            </a>
                        </FormField>
                        {showChangePassword && (
                            <>
                                <FormField>
                                    <label>Password</label>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        iconType='lock'
                                        onChange={e => this.handleFieldChange('password', e.target.value)}
                                    />
                                </FormField>
                                <FormField>
                                    <label>Confirm Password</label>
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        iconType='lock'
                                        onChange={e => this.handleFieldChange('confirmpassword', e.target.value)}
                                    />
                                </FormField>
                            </>
                        )}
                        <FormGroup>
                            <FormField className='flexible' inline>
                                <Button onClick={onToggleEdit} className='cell no-margin'>
                                    Cancel
                                </Button>
                            </FormField>
                            <FormField className='flexible' inline>
                                <Button type='submit' className='cell no-margin' primary>
                                    Save
                                </Button>
                            </FormField>
                        </FormGroup>
                    </Form>
                </div>
            </>
        );
    }
}
AccountDetails.propTypes = {
    accountDetails: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
    saveAccountDetails: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
};
AccountDetails.defaultProps = {
    accountDetails: [],
    saveAccountDetails: _.noop,
    onToggleEdit: _.noop,
};

export default connect(function mapStateToProps(state) {
    return {
        accountDetails: selectors.getProfileDetails(state),
    };
}, function matDispatchToProps(dispatch) {
    return {
        saveAccountDetails: (details) => dispatch(actions.saveAccountDetails(details)),
        onToggleEdit: () => dispatch(actions.toggleEdit()),
    }
})(AccountDetails);