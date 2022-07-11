import React from 'react';
import ShowOverlay from '../';

import CallToActionImg from 'img/overlay/category/notification/calltoaction.png';
import OptinImg from 'img/overlay/category/notification/optin.png';
import TimerImg from 'img/overlay/category/notification/timer.png';
import ContentSuggestionImg from 'img/overlay/category/notification/contentsuggestion.png';
import CustomImg from 'img/overlay/category/notification/custom.png';

const entities = [
    {type: 'calltoaction', caption: 'Call To Action', img: CallToActionImg},
    {type: 'optin', caption: 'Opt in', img: OptinImg},
    // {type: 'timer', caption: 'Timer', img: TimerImg},
    // {type: 'contentsuggestion', caption: 'Content Suggestion', img: ContentSuggestionImg},
    // {type: 'custom', caption: 'Custom', img: CustomImg},
]

export default function ShowOverlayNotificationCategory(props) {
    const { onSelect } = props;
    return <ShowOverlay onSelect={onSelect} entities={entities} />
}
