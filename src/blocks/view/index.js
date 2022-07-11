import React from 'react';

export function View(props) {
    const { children, ...viewProps } = props;
    return (
        <div {...viewProps}>
            {children}
        </div>
    );
}