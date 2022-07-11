import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import BarCustomImg1 from 'img/overlay/template/bar/custom/1.png';

const entities = [
    {type: '1', caption: 'Upgrade to Pro', img: BarCustomImg1},
]

export default function ShowOverlayBarCustomTemplates(props) {
    return <ShowOverlay className='templates-bar' display='vertical' entities={entities} />
}
