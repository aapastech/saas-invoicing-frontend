import React from 'react';
import { Placeholder, Segment } from "semantic-ui-react";
import _ from 'lodash';

const multiplier = {
    'medium': 2,
    'large': 20,
    'xlarge': 50,
};
export default class SitePlaceholder extends React.Component {
    render() {
        const { className, size = 'medium' } = this.props;
        let extraLines = multiplier[size] || 0;
        extraLines = new Array(extraLines);
        extraLines = _.map(extraLines, () => <Placeholder.Line length="full" />);
        return (
            <Segment raised className={className}>
                <Placeholder className='cell' fluid>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line length="full" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length="full" />
                        {extraLines}
                        <Placeholder.Line length="medium" />
                        <Placeholder.Line length="very long" />
                        <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                </Placeholder>
                {this.props.children}
            </Segment>
        );
    }
}