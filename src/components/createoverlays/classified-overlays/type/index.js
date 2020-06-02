import React from 'react';
import _ from 'lodash';
import ShowOverlay from '../';

import BarImg from 'img/overlay/type/bar.png';
import NotificationImg from 'img/overlay/type/notification.png';
import PopupImg from 'img/overlay/type/popup.png';
import FullScreenImg from 'img/overlay/type/fullpage.png';

const entities = [
    {type: 'bar', caption: 'Upgrade to Pro', img: BarImg},
    {type: 'notification', caption: 'Upgrade to Pro', img: NotificationImg},
    {type: 'popup', caption: 'Upgrade to Pro', img: PopupImg},
    // {type: 'fullpage', caption: 'Full Screen', img: FullScreenImg},
]


const entitiesUpgraded = [
    {type: 'bar', caption: 'Bar', img: BarImg},
    {type: 'notification', caption: 'Notification', img: NotificationImg},
    {type: 'popup', caption: 'Popup', img: PopupImg},
];

export default function ShowOverlayType(props) {
    const { onSelect, isUpgradedMember } = props;
    const overlayProps = {
        entities,
    }
    if (isUpgradedMember) {
        overlayProps.onSelect = onSelect;
        overlayProps.entities = entitiesUpgraded;
    }

    return <ShowOverlay display='horizontal' {...overlayProps} />
}