import React from 'react';
import _ from 'lodash';
import { Segment, View, Header, Icon, Input } from 'blocks';

const OverlayPopup = props => {
    return (
      <Segment className='overlay-root overlay-popup' inverted color="blue">
        <View>
          <Header as='h5'>
            <Icon name='lock' />
            <Header.Content>
              Join our community
              <Header.Subheader>Subscribe the newsletter</Header.Subheader>
            </Header.Content>
          </Header>
          <Input className='subscribe' action='Subscribe' iconPosition='left' icon='mail'  placeholder='Email...' />
        </View>
      </Segment>
    );
};

export default OverlayPopup;
