import React from 'react';
import _ from 'lodash';
import ShowOverlay from '../';

import CallToActionImg from 'img/overlay/category/bar/calltoaction.png';
import OptinImg from 'img/overlay/category/bar/optin.png';
import TimerImg from 'img/overlay/category/bar/timer.png';
import CustomImg from 'img/overlay/category/bar/custom.png';

const entities = [
    {type: 'calltoaction', caption: 'Call To Action', img: CallToActionImg},
    {type: 'optin', caption: 'Opt in', img: OptinImg},
    // {type: 'timer', caption: 'Timer', img: TimerImg},
    // {type: 'custom', caption: 'Custom', img: CustomImg},
]

export default function ShowOverlayBarCategory(props) {
    const { onSelect } = props;
    return <ShowOverlay onSelect={onSelect} entities={entities} />
}
