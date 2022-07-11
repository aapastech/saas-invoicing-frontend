import React from 'react';
import _ from 'lodash';

import BarCallToActionTemplates from './bar/calltoaction';
import BarOptinTemplates from './bar/optin';
import BarTimerTemplates from './bar/timer';
import BarCustomTemplates from './bar/custom';

import NotificationCallToActionTemplates from './notification/calltoaction';
import NotificationOptinTemplates from './notification/optin';
import NotificationTimerTemplates from './notification/timer';
import NotificationContentSuggestionTemplates from './notification/contentsuggestion';
import NotificationCustomTemplates from './notification/custom';

import PopupCallToActionTemplates from './popup/calltoaction';
import PopupOptinTemplates from './popup/optin';

import FullPageCallToActionTemplates from './fullpage/calltoaction';

const typeCategoryTemplateMap = {
    bar: {
        calltoaction: BarCallToActionTemplates,
        optin: BarOptinTemplates,
        timer: BarTimerTemplates,
        custom: BarCustomTemplates,
    },
    notification: {
        calltoaction: NotificationCallToActionTemplates,
        optin: NotificationOptinTemplates,
        timer: NotificationTimerTemplates,
        contentsuggestion: NotificationContentSuggestionTemplates,
        custom: NotificationCustomTemplates,
    },
    popup: {
        calltoaction: PopupCallToActionTemplates,
        optin: PopupOptinTemplates,
    },
    fullpage: {
        calltoaction: FullPageCallToActionTemplates,
    }
}

export default function ShowOverlayTemplate(props) {
    const { selected: { type, category } } = props;
    const ComponentTemplate = typeCategoryTemplateMap[type][category];
    return (
        <ComponentTemplate {...props}  />
    );
}
