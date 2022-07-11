import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import BarTimerImg1 from 'img/overlay/template/bar/timer/1.png';

const entities = [
    {type: '1', caption: 'Upgrade to Pro', img: BarTimerImg1},
]

export default function ShowOverlayBarTimerTemplates(props) {
    return <ShowOverlay className='templates-bar' display='vertical' entities={entities} />
}
