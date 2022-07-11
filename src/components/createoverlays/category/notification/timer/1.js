import React from 'react';
import _ from 'lodash';
import { Segment, View, Button } from 'blocks';
import { YourLogo } from 'components/createoverlays/elements';

const Template1 = props => {
    return (
      <Segment className='overlay-root overlay-notification' inverted color="blue">
        <View className='inline overlay-logo'>
          <YourLogo />
        </View>
        <View className='inline overlay-message'>
            Any message that you wish to show here
        </View>
      </Segment>
    );
};

export default Template1;
