import React from 'react';
import _ from 'lodash';
import ShowOverlay from 'components/createoverlays/classified-overlays';

import PopupCallToActionImg1 from 'img/overlay/template/popup/calltoaction/1.png';

const entities = [
    {type: '1', caption: '', img: PopupCallToActionImg1},
]

export default function ShowOverlayBarTemplates(props) {
    const {  onSelect } = props;
    return <ShowOverlay onSelect={onSelect} className='templates-popup' entities={entities} />
}
