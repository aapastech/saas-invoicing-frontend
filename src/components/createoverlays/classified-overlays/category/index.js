import React from 'react';
import _ from 'lodash';

import BarCategory from './bar';
import NotificationCategory from './notification';
import PopupCategory from './popup';
import FullPageCategory from './fullpage';

const typeCategoryMap = {
    bar: BarCategory,
    notification: NotificationCategory,
    popup: PopupCategory,
    fullpage: FullPageCategory,
}

export default function ShowOverlayCategory(props) {
    const { selected: { type } } = props;
    const ComponentCategory = typeCategoryMap[type];
    return (
        <ComponentCategory {...props}  />
    );
}
