import React from 'react';
import _ from 'lodash';
import ShowOverlay from '../';

import CallToActionImg from 'img/overlay/category/popup/calltoaction.png';
import OptinImg from 'img/overlay/category/popup/optin.png';

const entities = [
    {type: 'calltoaction', caption: 'Call To Action', img: CallToActionImg},
    // {type: 'optin', caption: 'Opt in', img: OptinImg},
]

export default function ShowOverlayPopupCategory(props) {
    const { onSelect } = props;
    return <ShowOverlay onSelect={onSelect} entities={entities} />
}
