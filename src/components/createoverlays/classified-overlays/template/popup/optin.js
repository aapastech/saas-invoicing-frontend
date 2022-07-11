import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import PopupOptinImg1 from 'img/overlay/template/popup/optin/1.png';
import PopupOptinImg2 from 'img/overlay/template/popup/optin/2.png';

const entities = [
    {type: '1', caption: 'Upgrade to Pro', img: PopupOptinImg1},
    {type: '2', caption: 'Upgrade to Pro', img: PopupOptinImg2},
]

export default function ShowOverlayBarOptinTemplates(props) {
    return <ShowOverlay className='templates-popup' entities={entities} />
}
