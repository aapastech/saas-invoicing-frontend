import React from 'react';
import { CenterContainer } from 'blocks';

export function CenterContainerCard(props) {
    const { children, ...centerContainerProps } = props;
    return (
        <CenterContainer {...centerContainerProps}>
            {children}
        </CenterContainer>
    )
}