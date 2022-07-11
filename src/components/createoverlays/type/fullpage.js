import React from 'react';
import _ from 'lodash';
import { Segment, View, Button, Header } from 'blocks';

const OverlayFullPage = props => {
    return (
      <Segment className='overlay-root overlay-fullscreen' inverted color="blue">
        <View>
          Your top message here
          <Header color='orange' as='h5'>Your heading here</Header>
          Some description message here can be placed
          <br />
          <Button size='mini'  color='violet'>
            Yes I am in!
          </Button>
        </View>
      </Segment>
    );
};

export default OverlayFullPage;
