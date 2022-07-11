import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

export function ButtonBlock(props) {
    const { type, children, ...remainingProps } = props;
    if (type === 'checkbox') {
        return <Checkbox {...remainingProps} />
    }
    return (
        <Button type={type} {...remainingProps}>
            {children}
        </Button>
    );
}

export function ButtonGroup(props)  {
    const { children, ...groupProps } = props;
    return (
        <Button.Group {...groupProps}>
            {children}
        </Button.Group>
    );
}

export function ButtonOr(props) {
    const { children, ...buttonOrProps } = props;
    return (
        <Button.Or {...buttonOrProps}>
            {children}
        </Button.Or>
    );
}