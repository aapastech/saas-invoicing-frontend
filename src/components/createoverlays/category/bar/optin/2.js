import React from 'react';
import _ from 'lodash';

import { Segment, View, Button } from 'blocks';
import { YourLogo, EmailBox, IconPanel } from '../../../elements';

const Template2 = props => {
  return (
    <Segment className='overlay-root overlay-bar' inverted color="blue">
      <View className='inline overlay-logo--enlarged'>
        <YourLogo />
      </View>
      <View className='inline overlay-message--enlarged'>
        Any message that you wish to show here
      </View>
      <View className='inline overlay-email--enlarged'>
        <EmailBox />
      </View>
      <View className='inline overlay-subscribe--enlarged'>
        <Button color='violet'>
          Yes I am in!
        </Button>
      </View>
      <View className='inline overlay-iconsPanel'>
        <IconPanel />
      </View>
    </Segment>
  );
};

export default Template2;
