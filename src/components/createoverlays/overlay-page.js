import React from 'react';
import PropTypes from 'prop-types';
import WebPage from './webpage';
import { View } from 'blocks';
import OverlayBar from './type/bar';
import OverlayNotification from './type/notification';
import OverlayPopup from './type/popup';
import OverlayFullPage from './type/fullpage';

const overlayTypeMap = {
    bar: OverlayBar,
    notification: OverlayNotification,
    fullpage: OverlayFullPage,
    popup: OverlayPopup,
}

export default class OverlayPage extends React.Component {
    render() {
        const { type, category, template } = this.props;
        const ComponentMapped = overlayTypeMap[type];

        return(
            <View>
                <WebPage size='xlarge' />
                <ComponentMapped category={category} template={template} />
            </View>
        );
    }
}
OverlayPage.propTypes = {

};
OverlayPage.defaultProps = {

};