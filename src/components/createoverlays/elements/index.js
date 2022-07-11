import React from 'react';
import { View, Icon, Input, Image, Header } from 'blocks';

export const YourLogo = () => (
  <Header as='h4' inverted>
    <Image 
        src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
        width={35} className='inline' circular />
    logo caption
  </Header>
);
export const EmailBox = () => <Input size='mini' placeholder='Enter your email' />;

export const IconPanel = () => (
  <View className='overlay-iconbox pointer'>
    <Icon size='big' name='facebook f' />
    <Icon size='big' name='twitter' />
  </View>
);