import React from 'react';
import _ from 'lodash';
import { Segment, View } from 'blocks';
import { YourLogo } from 'components/createoverlays/elements';

const Template2 = props => {
    return (
      <Segment className='overlay-root overlay-bar' inverted color="blue">
        <View className='inline overlay-logo'>
          <YourLogo />
        </View>
        <View className='inline overlay-message'>
          Any message that you wish to show here
        </View>
        <View className='inline'>
        </View>
      </Segment>
    );
};
export default Template2;