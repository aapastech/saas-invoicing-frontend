import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import NotificationOptinImg1 from 'img/overlay/template/notification/optin/1.png';

const entities = [
    {type: '1', caption: '', img: NotificationOptinImg1},
]

export default function ShowOverlayNotificationTemplates(props) {
    const { onSelect } = props;
    return <ShowOverlay className='templates-notification' display='vertical' onSelect={onSelect} entities={entities} />
}
