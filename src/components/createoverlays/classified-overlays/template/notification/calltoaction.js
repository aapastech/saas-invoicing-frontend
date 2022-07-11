import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import NotificationCallToActionImg1 from 'img/overlay/template/notification/calltoaction/1.png';
import NotificationCallToActionImg2 from 'img/overlay/template/notification/calltoaction/2.png';

const entities = [
    {type: '1', caption: '', img: NotificationCallToActionImg1},
    {type: '2', caption: '', img: NotificationCallToActionImg2},
]

export default function ShowOverlayNotificationTemplates(props) {
    const { onSelect } = props;
    return <ShowOverlay className='templates-notification' display='vertical' onSelect={onSelect} entities={entities} />
}
