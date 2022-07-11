import React from 'react';
import { Segment } from 'semantic-ui-react';

export function Paper(props) {
    const { children, ...paperProps } = props;
    return (
        <Segment {...paperProps}>
            {children}
        </Segment>
    );
}