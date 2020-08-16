import React from 'react';
import { Grid } from 'semantic-ui-react'

export function CenterContainer(props) {
    const { cols = 6, children, ...remainingProps} = props;
    return (
        <Grid columns='equal' textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' {...remainingProps}>
            <Grid.Column width={cols}>
                {children}
            </Grid.Column>
        </Grid>
    )
}