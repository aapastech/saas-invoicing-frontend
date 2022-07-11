import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import BarCallToActionImg1 from 'img/overlay/template/bar/calltoaction/1.png';
import BarCallToActionImg2 from 'img/overlay/template/bar/calltoaction/2.png';
import BarCallToActionImg3 from 'img/overlay/template/bar/calltoaction/3.png';

const entities = [
    {type: '1', caption: '', img: BarCallToActionImg1},
    {type: '2', caption: '', img: BarCallToActionImg2},
    {type: '3', caption: '', img: BarCallToActionImg3}
]

export default function ShowOverlayBarTemplates(props) {
    const { onSelect } = props;
    return <ShowOverlay className='templates-bar' display='vertical' onSelect={onSelect} entities={entities} />
}
