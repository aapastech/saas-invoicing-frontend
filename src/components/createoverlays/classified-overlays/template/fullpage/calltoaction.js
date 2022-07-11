import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import FullPageCallToActionImg1 from 'img/overlay/template/fullpage/calltoaction/1.png';

const entities = [
    {type: '1', caption: 'Upgrade to Pro', img: FullPageCallToActionImg1},
]

export default function ShowOverlayBarTemplates(props) {
    return <ShowOverlay className='templates-fullpage' entities={entities} />
}
