import React from 'react';
import _ from 'lodash';
import { FluidContainer } from 'blocks';
import OverlayEntity from '../overlayEntity';

export { default as ShowOverlayType } from './type';
export { default as ShowOverlayCategory } from './category';
export { default as ShowOverlayTemplate } from './template';
export { default as ShowOverlayName } from './name';

export  default function ShowOverlay(props) {
    const { onSelect, entities, display = 'horizontal', className = '' } = props;

    let fixClassName = 'overlay-card';
    let colSize = 5;
    if (display !== 'horizontal') {
        fixClassName = 'overlay-row';
        colSize = 16;
    }

    return (
        <FluidContainer className={`${className} ${fixClassName}`} colWidth={colSize}>
            {_.map(entities, (entity, index) => (
                <OverlayEntity {...entity} onSelect={onSelect} key={index} />
            ))}
        </FluidContainer>
    )
}