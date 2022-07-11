import React from 'react';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';


export default class FluidContainer extends React.Component {
    render() {
        const { children, colWidth, ...gridProps } = this.props;
        const colProps = {};
        if (colWidth) colProps.width = colWidth;
        return (
            <Grid stackable {...gridProps}>
                {_.map(children, (child, index) => (<Grid.Column key={index} {...colProps}>{child}</Grid.Column>))}
            </Grid>
        );
    }
}