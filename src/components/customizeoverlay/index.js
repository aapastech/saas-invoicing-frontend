import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { getFeatureFlagsPerSelection } from './utils';
import CustomizeForm from './form';
import CustomizedOverlay from './overlay';
const background = {};
const logo = {
    url: `${process.env.REACT_APP_API_HOSTNAME}/logo.svg`,
};
const message = {
    color: '',
    text: 'Set up your own overlay today',
};
const title = {
    color: '',
    text: 'Get more from information',
};
const image = {
    image: `${process.env.REACT_APP_API_HOSTNAME}/logo.svg`,
};
const input = {
    placeholder: 'Please enter your email',
    color: '#ffffff'
};
const button = {
    color: '',
    textColor: '',
    name: 'Yes, Get Tips!',
    url: `${process.env.REACT_APP_API_HOSTNAME}`,
};
const socialIcons = {
    facebook: '',
    twitter: ''
};
const closeButton = {
    isVisible: true,
    color: '#fff',
};
export default class CustomizeOverlay extends React.Component {
    constructor(props) {
        super(props);
        const { selected } = this.props;
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveState = this.handleSaveState.bind(this);
        this.handleSubmitAndSave = this.handleSubmitAndSave.bind(this);
        const featureFlags = getFeatureFlagsPerSelection(selected);
        this.state = {
            shouldShowOnPageLoad: true,
            showDelay: 0,
            shouldFadePageBackground: false,
            positionedBottom: true,
            closeButton: {
                ...closeButton,
            },
            background: {
                ...background,
            },
            logo: {
                ...logo,
            },
            message: {
                ...message,
            },
            title: {
                ...title,
            },
            image: {
                ...image
            },
            input: {
                ...input,
            },
            button: {
                ...button,
            },
            socialIcons: {
                ...socialIcons,
            },
            ...featureFlags,
            ...selected,
        };
    }

    handleChange(fieldId, fieldValue) {
        this.setState({ [fieldId]: fieldValue });
    }
    
    handleSaveState(stateChanges) {
        this.setState(stateChanges);
    }

    handleSubmitAndSave() {
        const html = document.querySelector('.dummy-page').innerHTML;
        this.props.onSave(this.state);
    }

    render() {
        const { ...featureFlags } = this.state;
        return (
            <>
                <div className='flexible cell'>
                    <div className='cell-w2'>
                        <CustomizeForm 
                            featureFlags={featureFlags} 
                            onChange={this.handleChange}
                            saveState={this.handleSaveState} 
                            onSave={this.handleSubmitAndSave}
                        />
                    </div>
                    <div className='cell-w5'>
                        <CustomizedOverlay {...featureFlags} />
                    </div>
                </div>
            </>
        );
    }
}

CustomizeOverlay.propTypes = {
    selected: PropTypes.object,
    onSave: PropTypes.func.isRequired,
}