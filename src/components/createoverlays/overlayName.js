import React from 'react';
import _ from 'lodash';
import { SitePlaceholder, Segment, Label } from 'blocks';

const text = `I'm here to tell you something, and you will probably read me first.`;
const YourLogo = () => <div className="inline">Your logo here</div>;
const EmailBox = () => <div className="inline">Your logo here</div>;

const OverlayBar = props => {
  return (
    <Segment className='overlay-bar' inverted color="blue">
      <YourLogo />
      {text}
    </Segment>
  );
};

const OverlayNotification = props => {
    return (
      <Segment className='overlay-notification' inverted color="blue">
        <YourLogo />
        {text}
      </Segment>
    );
};

const OverlayPopup = props => {
    return (
      <Segment className='overlay-popup' inverted color="blue">
        <YourLogo />
        {text}
      </Segment>
    );
};

const OverlayFullPage = props => {
    return (
      <Segment className='overlay-fullpage' inverted color="blue">
        <YourLogo />
        {text}
      </Segment>
    );
};

const overlayTypeMap = {
    bar: OverlayBar,
    notification: OverlayNotification,
    ['full page']: OverlayFullPage,
    popup: OverlayPopup,
}
  
export default class OverlayCategory extends React.Component {
    render() {
        const { type = 'bar', onSelect = _.noop } = this.props;
        const ComponentMapped = overlayTypeMap[type];

        return (
            <SitePlaceholder>
                <Label ribbon attached='top right' color='red' className='overlay-name'>
                {_.startCase(type)}
                </Label>
                <ComponentMapped />
                <Label className='pointer' onClick={e => onSelect(type)} as='button' 
                  attached='bottom' color='orange'>
                  Select
                </Label>
            </SitePlaceholder>
        );
    }
}