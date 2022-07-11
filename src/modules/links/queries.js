import _ from 'lodash';

export function overlaysForLinks(overlaysList) {
    return _.map(overlaysList, ({ id: value, name: text }) => ({ text, value, key: value }));
}