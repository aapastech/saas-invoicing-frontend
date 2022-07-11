import React from 'react';
import _ from 'lodash';
import ShowOverlay from '../';

import CallToActionImg from 'img/overlay/category/fullpage/calltoaction.png';

const entities = [
    {type: 'calltoaction', caption: 'Call To Action', img: CallToActionImg},
]

export default function ShowOverlayFullPageCategory(props) {
    const { onSelect } = props;
    return <ShowOverlay onSelect={onSelect} entities={entities} />
}
