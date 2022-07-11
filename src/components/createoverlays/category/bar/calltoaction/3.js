import React from 'react';
import _ from 'lodash';
import { Segment, View } from 'blocks';

const Template3 = props => {
    return (
      <Segment className='overlay-root overlay-bar' inverted color="blue">
        <View className='inline cell overlay-message'>
            <h1>Any message that you wish to show here</h1>
        </View>
      </Segment>
    );
};
export default Template3;