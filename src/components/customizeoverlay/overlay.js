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
            showImage,
            showTitle,
            showInput,
            showButton,
            showSocialIcons,
            logo,
            message,
            image,
            title,
            input,
            button,
            socialIcons,
            background,
            positionedBottom,
            closeButton,
        } = this.props;

        const backgroundStyle = {};
        if(background.color) {
            backgroundStyle.backgroundColor = background.color;
        } else if (background.image) {
            backgroundStyle.backgroundImage = `url(${background.image})`;
        }

        const isSocialIconsVisible = showSocialIcons && Boolean(_.find(socialIcons, (url, key) => Boolean(url)));
        const socialIconsClass = `socialIcons ${isSocialIconsVisible ? '' : 'hidden'}`;

        const logoClass = `logo ${showLogo ? '': 'hidden'}`;
        const positionClass = positionedBottom ? 'position-bottom': 'position-top';

        const messageText = message.text ? _.replace(message.text, /\n/g, '<br />') : '';
        return(
            <>
                <div className='dummy-page'>
                    <div 
                        className={`${widthClassName} ${fontSizeClassName} ${templateClassName} ${positionClass}`}
                        style={backgroundStyle}
                    >
                        <div className={logoClass}>
                            <a target='_blank' href={logo.url || '#'}>
                                {logo.image && <img src={logo.image} />}
                                {!logo.image && <div className='dummy-logo'>Logo</div>}
                            </a>
                        </div>
                        {showImage && image.image && (
                            <img width="170" height="50" src={image.image} className='img' />
                        )}
                        {showTitle && (
                            <div 
                                className='title'
                                style={{
                                    color: title.color,
                                }}
                            >{title.text}</div>
                        )}
                        {showMessage && (
                            <div 
                                className='message'
                                style={{
                                    color: message.color,
                                }}
                                dangerouslySetInnerHTML={{ __html: messageText }}
                            ></div>
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
                                <a target='_blank' href={button.url}>
                                    <button
                                        style={{
                                            backgroundColor: button.color,
                                            color: button.textColor,
                                        }} 
                                    >
                                        {button.name}
                                    </button>
                                </a>
                            )}
                        </div>
                        <div className={socialIconsClass}>
                            {socialIcons.facebook && (
                                <a target='_blank' href={socialIcons.facebook}>
                                    <img src={`${process.env.REACT_APP_API_HOSTNAME}/facebook.svg`} />
                                </a>
                            )}
                            {socialIcons.twitter && (
                                <a target='_blank' href={socialIcons.twitter}>
                                    <img src={`${process.env.REACT_APP_API_HOSTNAME}/twitter.svg`} />
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
    showTitle: PropTypes.bool.isRequired,
    showInput: PropTypes.bool.isRequired,
    showButton: PropTypes.bool.isRequired,
    showSocialIcons: PropTypes.bool.isRequired,
};
CustomizedOverlay.defaultProps = {
    background: {},
};