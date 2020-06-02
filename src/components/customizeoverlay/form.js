import React from 'react';
import PropTypes from 'prop-types';
import { 
    Input, Form, FormField, Button, Radio, FormGroup, ColorPicker, TextArea 
} from 'blocks';
import { ImageUpload } from 'modules';

export default class CustomizeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            showLogoUpload: false,
            showImageUpload: false,
            showBackgroundUpload: false,
        }
        this.handleLogoImage = this.handleLogoImage.bind(this);
        this.handleHideLogoImage = this.handleHideLogoImage.bind(this);
        this.handleSaveLogoImageLink = this.handleSaveLogoImageLink.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleHideImage = this.handleHideImage.bind(this);
        this.handleSaveImageLink = this.handleSaveImageLink.bind(this);
        this.handleBackgroundImage = this.handleBackgroundImage.bind(this);
        this.handleHideBackgroundImage = this.handleHideBackgroundImage.bind(this);
        this.handleSaveBackgroundImageLink = this.handleSaveBackgroundImageLink.bind(this);
    }

    handleLogoImage() {
        this.setState({ showLogoUpload: true });
    }

    handleHideLogoImage() {
        this.setState({ showLogoUpload: false });
    }

    handleSaveLogoImageLink(logoUrl) {
        this.props.saveState(
            { 
                logo: {
                    ...this.props.featureFlags.logo,
                    image: logoUrl,
                }
            }
        );
        this.handleHideLogoImage();
    }

    handleImage() {
        this.setState({ showImageUpload: true });
    }

    handleHideImage() {
        this.setState({ showImageUpload: false });
    }

    handleSaveImageLink(imageUrl) {
        this.props.saveState(
            { 
                image: {
                    ...this.props.featureFlags.image,
                    image: imageUrl,
                }
            }
        );
        this.handleHideImage();
    }

    handleBackgroundImage() {
        this.setState({ showBackgroundUpload: true });
    }

    handleHideBackgroundImage() {
        this.setState({ showBackgroundUpload: false });
    }

    handleSaveBackgroundImageLink(logoUrl) {
        this.props.saveState(
            { 
                background: {
                    ...this.props.featureFlags.background,
                    image: logoUrl,
                }
            }
        );
        this.handleHideBackgroundImage();
    }
    render() {
        const { showLogoUpload, showBackgroundUpload, showImageUpload } = this.state;
        const { featureFlags, onChange, saveState, onSave } = this.props;
        return(
            <>
                <div className='customization-form'>
                    <Form>
                        <h4>Customize Overlay</h4>
                        <div className='field-section'>
                            <FormField inline>
                                <label>Overlay name</label>
                                <Input 
                                    placeholder='Overlay Name' 
                                    value={featureFlags.overlayName} 
                                    onChange={e => onChange('overlayName', e.target.value)}
                                />
                            </FormField>
                        </div>
                        <div className='field-section'>
                            <FormField>
                                <label>Show overlay when:-</label>
                            </FormField>
                            <FormGroup widths='equal'>
                                <FormField>
                                    <Radio
                                        label='page loads'
                                        name='showOverlayTiming'
                                        value={true}
                                        checked={featureFlags.shouldShowOnPageLoad}
                                        onChange={() => onChange('shouldShowOnPageLoad', true)}
                                    />
                                </FormField>
                                <FormField>
                                    <Radio
                                        label='leaving the page'
                                        name='showOverlayTiming'
                                        value={false}
                                        checked={!featureFlags.shouldShowOnPageLoad}
                                        onChange={() => onChange('shouldShowOnPageLoad', false)}
                                    />
                                </FormField>
                            </FormGroup>
                            {featureFlags.shouldShowOnPageLoad && (
                                <FormField inline>
                                    <label> after</label>
                                    <Input 
                                        type="text" value={featureFlags.showDelay} 
                                        onChange={e => onChange('showDelay', e.target.value)}
                                    />
                                    <label> &nbsp; seconds</label>
                                </FormField>
                            )}
                        </div>
                        <div className='field-section'>
                            <FormGroup>
                                <FormField inline>
                                    <label>Display at bottom</label>
                                    <Button type='checkbox' 
                                        checked={featureFlags.positionedBottom}
                                        onClick={
                                            () => onChange(
                                                'positionedBottom', 
                                                !featureFlags.positionedBottom
                                            )
                                        }
                                    />
                                </FormField>
                                <FormField inline>
                                    <label>Fade background</label>
                                    <Button type='checkbox' 
                                        checked={featureFlags.shouldFadePageBackground}
                                        onClick={
                                            () => onChange(
                                                'shouldFadePageBackground', 
                                                !featureFlags.shouldFadePageBackground
                                            )
                                        }
                                    />
                                </FormField>
                                <FormField inline>
                                    <label>Show close</label>
                                    <Button type='checkbox' 
                                        checked={featureFlags.closeButton.isVisible}
                                        onClick={() => saveState(
                                            { 
                                                closeButton: {
                                                    ...featureFlags.closeButton,
                                                    isVisible: !featureFlags.closeButton.isVisible,
                                                }
                                            }
                                        )}
                                    />
                                </FormField>
                            </FormGroup>
                            <FormField inline>
                                <label>Close icon color</label>
                                <ColorPicker 
                                    value={featureFlags.closeButton.color}
                                    onChange={color => saveState(
                                        {
                                            closeButton: {
                                                ...featureFlags.closeButton,
                                                color,
                                            }
                                        }
                                    )} 
                                />
                            </FormField>
                        </div>
                        {featureFlags.showLogo && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <label>Logo link</label>
                                        <Input 
                                            placeholder='Please enter URL the logo points to' 
                                            value={featureFlags.logo.url} 
                                            onChange={e => saveState(
                                                { 
                                                    logo: {
                                                        ...featureFlags.logo,
                                                        url: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Logo image</label>
                                        <Input 
                                            label={
                                                <Button type='button' onClick={this.handleLogoImage}>Upload</Button>
                                            }
                                            labelPosition='right'
                                            placeholder='Please enter the logo image URL' 
                                            value={featureFlags.logo.image} 
                                            onChange={e => saveState(
                                                { 
                                                    logo: {
                                                        ...featureFlags.logo,
                                                        image: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        <div className='field-section'>
                            <FormGroup>
                                <FormField>
                                    <label>Background</label>
                                    <ColorPicker 
                                        value={featureFlags.background.color}
                                        onChange={color => saveState(
                                            {
                                                background: {
                                                    ...featureFlags.background,
                                                    color,
                                                }
                                            }
                                        )} 
                                    />
                                </FormField>
                                <FormField>
                                    <label>Background image</label>
                                    <Input 
                                        label={
                                            <Button type='button' onClick={this.handleBackgroundImage}>Upload</Button>
                                        }
                                        labelPosition='right'
                                        placeholder='Please enter the background image URL' 
                                        value={featureFlags.background.image} 
                                        onChange={e => saveState(
                                            { 
                                                background: {
                                                    ...featureFlags.background,
                                                    image: e.target.value,
                                                }
                                            }
                                        )}
                                    />
                                </FormField>
                            </FormGroup>
                        </div>
                        {featureFlags.showImage && (
                            <div className='field-section' title='Recommended image size is 150 X 50'>
                                <FormGroup>
                                    <FormField>
                                        <label>Image</label>
                                        <Input 
                                            label={
                                                <Button type='button' onClick={this.handleImage}>Upload</Button>
                                            }
                                            labelPosition='right'
                                            placeholder='Please enter the image URL' 
                                            value={featureFlags.image.image} 
                                            onChange={e => saveState(
                                                { 
                                                    image: {
                                                        ...featureFlags.image,
                                                        image: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        {featureFlags.showTitle && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <label>Title color</label>
                                        <ColorPicker 
                                            value={featureFlags.title.color}
                                            onChange={color => saveState(
                                                {
                                                    title: {
                                                        ...featureFlags.title,
                                                        color,
                                                    }
                                                }
                                            )} 
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Title text</label>
                                        <Input 
                                            placeholder='Please enter the title' 
                                            value={featureFlags.title.text} 
                                            onChange={e => saveState(
                                                { 
                                                    title: {
                                                        ...featureFlags.title,
                                                        text: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        {featureFlags.showMessage && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <label>Message font</label>
                                        <ColorPicker 
                                            value={featureFlags.message.color}
                                            onChange={color => saveState(
                                                {
                                                    message: {
                                                        ...featureFlags.message,
                                                        color,
                                                    }
                                                }
                                            )} 
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Message text</label>
                                        <TextArea 
                                            placeholder='Please enter the message' 
                                            value={featureFlags.message.text} 
                                            onChange={e => saveState(
                                                { 
                                                    message: {
                                                        ...featureFlags.message,
                                                        text: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        {featureFlags.showInput && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <label>Input background</label>
                                        <ColorPicker 
                                            value={featureFlags.input.color}
                                            onChange={color => saveState(
                                                {
                                                    input: {
                                                        ...featureFlags.input,
                                                        color,
                                                    }
                                                }
                                            )} 
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Placeholder text</label>
                                        <Input 
                                            value={featureFlags.input.placeholder}
                                            onChange={e => saveState(
                                                {
                                                    input: {
                                                        ...featureFlags.input,
                                                        placeholder: e.target.value || '',
                                                    }
                                                }
                                            )} 
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        {featureFlags.showButton && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <label>Button background</label>
                                        <ColorPicker 
                                            btnText='Pick Color'
                                            value={featureFlags.button.color}
                                            onChange={color => saveState(
                                                {
                                                    button: {
                                                        ...featureFlags.button,
                                                        color,
                                                    }
                                                }
                                            )} 
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Button text & Color</label>
                                        <Input 
                                            value={featureFlags.button.name}
                                            onChange={e => saveState(
                                                {
                                                    button: {
                                                        ...featureFlags.button,
                                                        name: e.target.value || '',
                                                    }
                                                }
                                            )} 
                                        >
                                            <input />
                                            <ColorPicker 
                                                btnText='font'
                                                value={featureFlags.button.textColor}
                                                onChange={textColor => saveState(
                                                    {
                                                        button: {
                                                            ...featureFlags.button,
                                                            textColor,
                                                        }
                                                    }
                                                )} 
                                            />
                                        </Input>
                                    </FormField>
                                </FormGroup>
                                <FormField>
                                    <label>Button link</label>
                                    <Input 
                                        placeholder='Please enter URL the button points to' 
                                        value={featureFlags.button.url} 
                                        onChange={e => saveState(
                                            { 
                                                button: {
                                                    ...featureFlags.button,
                                                    url: e.target.value,
                                                }
                                            }
                                        )}
                                    />
                                </FormField>
                            </div>
                        )}
                        {featureFlags.showSocialIcons && (
                            <div className='field-section'>
                                <FormGroup>
                                    <FormField>
                                        <Input 
                                            placeholder='Facebook URL' 
                                            value={featureFlags.socialIcons.facebook} 
                                            onChange={e => saveState(
                                                { 
                                                    socialIcons: {
                                                        ...featureFlags.socialIcons,
                                                        facebook: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                    <FormField>
                                        <Input 
                                            placeholder='Twitter URL' 
                                            value={featureFlags.socialIcons.twitter} 
                                            onChange={e => saveState(
                                                { 
                                                    socialIcons: {
                                                        ...featureFlags.socialIcons,
                                                        twitter: e.target.value,
                                                    }
                                                }
                                            )}
                                        />
                                    </FormField>
                                </FormGroup>
                            </div>
                        )}
                        <div className='p-top-10 p-btm-10 flexible-centered'>
                            <Button type='submit' onClick={onSave}>Submit</Button>
                        </div>
                    </Form>
                </div>
                {showLogoUpload && (
                    <ImageUpload 
                        onNewFileLink={this.handleSaveLogoImageLink} 
                        onCancel={this.handleHideLogoImage} 
                    />
                )}
                {showImageUpload && (
                    <ImageUpload 
                        onNewFileLink={this.handleSaveImageLink} 
                        onCancel={this.handleHideImage} 
                    />
                )}
                {showBackgroundUpload && (
                    <ImageUpload 
                        onNewFileLink={this.handleSaveBackgroundImageLink} 
                        onCancel={this.handleHideBackgroundImage} 
                    />
                )}
            </>
        );
    }
}

CustomizeForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    saveState: PropTypes.func.isRequired,
    featureFlags: PropTypes.shape({
        widthClassName: PropTypes.string.isRequired,
        fontSizeClassName: PropTypes.string.isRequired,
        templateClassName: PropTypes.string.isRequired,
        overlayName: PropTypes.string.isRequired,
        showLogo: PropTypes.bool.isRequired,
        showImage: PropTypes.bool.isRequired,
        showTitle: PropTypes.bool.isRequired,
        showMessage: PropTypes.bool.isRequired,
        showInput: PropTypes.bool.isRequired,
        showButton: PropTypes.bool.isRequired,
        showSocialIcons: PropTypes.bool.isRequired,
    }).isRequired,
};