import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import NotificationContentImg1 from 'img/overlay/template/notification/contentsuggestion/1.png';

const entities = [
    {type: '1', caption: 'Upgrade to Pro', img: NotificationContentImg1},
]

export default function ShowOverlayNotificationTemplates(props) {
    return <ShowOverlay className='templates-notification' display='vertical' entities={entities} />
}
