import React from 'react';

import { Form } from 'semantic-ui-react';

export function FormBlock(props) {
    const { children, ...formProps } = props;
    return (
        <Form {...formProps}>
            {children}
        </Form>
    );
}

export function FormGroup(props) {
    const { children, ...formGroupProps } = props;
    return (
        <Form.Group {...formGroupProps}>
            {children}
        </Form.Group>
    )
}