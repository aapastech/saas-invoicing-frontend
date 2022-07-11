import React from 'react';
import { Container } from 'semantic-ui-react';

export function Box(props) {
    const { children, ...boxProps } = props;
    return (
        <Container {...boxProps}>
            {children}
        </Container>
    );
}