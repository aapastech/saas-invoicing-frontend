import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Icon, Input, Form, FormField, Dropdown, Button } from 'blocks';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';

export class LinkForm extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            targetUrl: '',
            overlayId: '',
        };
        this.handleOverlayChange = this.handleOverlayChange.bind(this);
        this.handleTargetUrlChange = this.handleTargetUrlChange.bind(this);
    }
    
    static getDerivedStateFromProps(props, state) {
        if (!state.targetUrl && props.linkDetails) {
            return props.linkDetails;
        }
        return state;
    }

    handleTargetUrlChange(e) {
        this.setState({ targetUrl: e.target.value }, () => this.props.onChange(this.state));
    }

    handleOverlayChange(e, data) {
        this.setState({ overlayId: data.value }, () => this.props.onChange(this.state));
    }

    render() {
        const { targetUrl, overlayId } = this.state;
        const { overlays } = this.props;
        return (
            <Form>
                <FormField>
                    <label>Target URL</label>
                    <Input 
                        id='longURL' type="text" value={targetUrl} 
                        onChange={this.handleTargetUrlChange} 
                    />
                </FormField>
                <FormField>
                    <label>Select overlay</label>
                    <Dropdown 
                        value={overlayId} 
                        placeholder='You may or may not select an overlay' 
                        fluid 
                        selection 
                        onChange={this.handleOverlayChange}
                        options={overlays} 
                    />
                </FormField>
                <br /> <br />
            </Form>
        );
    }
};    
LinkForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    overlays: PropTypes.array.isRequired,
    linkDetails: PropTypes.shape({
        targetUrl: PropTypes.string,
        overlayId: PropTypes.string,
    }),
};

export class CreatedLinkForm extends React.PureComponent {
    constructor(){
        super();
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        copyToClipboard(this.props.shortUrl);
        showToast(`Link copied to clipboard`, 'success');
    }

    render() {
        const { shortUrl } = this.props;
        return (
            <Form>
                <FormField>
                    <label>Short URL</label>
                    <Input 
                        onClick={this.handleCopy} 
                        readOnly id='shortURL' type="text" value={shortUrl} 
                        icon={
                            <Icon 
                                onClick={this.handleCopy} 
                                title='Copy'
                                className='pointer' 
                                name='copy' 
                                color='blue' 
                                circular
                                inverted
                                link
                            />    
                        }
                    />
                </FormField>
            </Form>
        );
    }
}

export class CreateLinkTrigger extends React.PureComponent {
    constructor() {
        super();
        this.buttonProperties = {
            floated: 'right',
            icon: true,
            labelPosition: 'left',
            primary: true,
            size: 'small',
        };
    }
    render() {
        return (
            <Button {...this.buttonProperties} onClick={this.props.onClick}>
                <Icon name='linkify' /> Add New Link
            </Button>
        );
    }
}
CreateLinkTrigger.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CreateLinkTrigger;