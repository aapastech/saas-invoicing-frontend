import React from 'react';
import PropTypes from 'prop-types';
import 'styles/customoverlay.scss';
import _ from 'lodash';

export default class CustomizedOverlay extends React.Component {
    render() {
        const {
            widthClassName = '',
            templateClassName = '',
            fontSizeClassName = '',
            shouldFadePageBackground,
            showLogo,
            showMessage,
            showInput,
            showButton,
            showSocialIcons,
            logo,
            message,
            input,
            button,
            socialIcons,
            background,
            positionedBottom,
            closeButton,
        } = this.props;

        const { location: { origin, pathname } } = window;
        const isSocialIconsVisible = showSocialIcons && Boolean(_.find(socialIcons, (url, key) => Boolean(url)));
        const socialIconsClass = `socialIcons ${isSocialIconsVisible ? '' : 'hidden'}`;

        const logoClass = `logo ${showLogo ? '': 'hidden'}`;
        const positionClass = positionedBottom ? 'position-bottom': 'position-top';

        return(
            <>
                <div className='dummy-page'>
                    <div 
                        className={`${widthClassName} ${fontSizeClassName} ${templateClassName} ${positionClass}`}
                        style={{ backgroundColor: background.color, backgroundImage: `url(${background.image})` }}
                    >
                        <div className={logoClass}>
                            <a target='_blank' href={logo.url || '#'}>
                                {logo.image && <img src={logo.image} />}
                                {!logo.image && <div className='dummy-logo'>Logo</div>}
                            </a>
                        </div>
                        {showMessage && (
                            <div 
                                className='message'
                                style={{
                                    color: message.color,
                                }}
                            >{message.text}</div>
                        )}
                        <div className='flexible'>
                            {showInput && (
                                <div className='input'>
                                    <input 
                                        style={{ backgroundColor: input.color || '' }} 
                                        type='text' placeholder={input.placeholder} 
                                    />
                                </div>
                            )}
                            {showButton && (
                                    <button
                                        style={{
                                            backgroundColor: button.color,
                                            color: button.textColor,
                                        }} 
                                    >
                                        {button.name}
                                    </button>
                            )}
                        </div>
                        <div className={socialIconsClass}>
                            {socialIcons.facebook && (
                                <a target='_blank' href={socialIcons.facebook}>
                                    <img src={`${origin+pathname}facebook.svg`} />
                                </a>
                            )}
                            {socialIcons.twitter && (
                                <a target='_blank' href={socialIcons.twitter}>
                                    <img src={`${origin+pathname}twitter.svg`} />
                                </a>
                            )}
                        </div>
                        {closeButton.isVisible && (
                            <div 
                                className='close-button' 
                                style={{ color: closeButton.color }}>
                                x
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
}
CustomizedOverlay.propTypes = {
    widthClassName: PropTypes.string.isRequired,
    fontSizeClassName: PropTypes.string.isRequired,
    templateClassName: PropTypes.string.isRequired,
    overlayName: PropTypes.string.isRequired,
    showLogo: PropTypes.bool.isRequired,
    showMessage: PropTypes.bool.isRequired,
    showInput: PropTypes.bool.isRequired,
    showButton: PropTypes.bool.isRequired,
    showSocialIcons: PropTypes.bool.isRequired,
};
CustomizedOverlay.defaultProps = {
    background: {},
};