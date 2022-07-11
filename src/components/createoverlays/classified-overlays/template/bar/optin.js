import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import BarOptinImg1 from 'img/overlay/template/bar/optin/1.png';
import BarOptinImg2 from 'img/overlay/template/bar/optin/2.png';
import BarOptinImg3 from 'img/overlay/template/bar/optin/3.png';

const entities = [
    {type: '1', caption: '', img: BarOptinImg1},
    {type: '2', caption: '', img: BarOptinImg2},
    {type: '3', caption: '', img: BarOptinImg3},
]

export default function ShowOverlayBarOptinTemplates(props) {
    const { onSelect } = props;
    return <ShowOverlay className='templates-bar' display='vertical' onSelect={onSelect} entities={entities} />
}
