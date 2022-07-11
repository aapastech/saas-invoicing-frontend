import React from 'react';
import _ from 'lodash';
import { Label, View, Icon, Modal, Image } from 'blocks';

export default class OverlayType extends React.Component {
    state = {
      isModalOpen: false
    };

    handleOnExpand = () => this.setState({ isModalOpen: true });
    
    handleClose = () => this.setState({ isModalOpen: false });

    render() {
      const { onSelect, type, caption, img } = this.props;
      const { isModalOpen } = this.state;
      const TypeComponent = props => (
          <>
            <View className='overlay-container'>
              <View className='relative'>
                <Image src={img} />
                {!isModalOpen && (
                  <>
                    {caption && (
                      <Label ribbon attached='top right' color='red' className='overlay-name'>
                        {_.startCase(caption)}
                      </Label>
                    )}
                    <View className='overlay-expandedview pointer' onClick={this.handleOnExpand}>
                      <Icon name='magnify' size='huge' />
                    </View>
                  </>
                )}
              </View>
              {!isModalOpen && onSelect && (
                <Label className='pointer' onClick={e => onSelect(type)} as='button' 
                    color='orange'>
                    Select
                </Label>
              )}
            </View>
            {props.children}
          </>
        );
        const ZoomedView = () => (
          <View className='overlay-zoomview'><TypeComponent /></View>
        )
        return (
          <TypeComponent>
            <Modal 
              open={isModalOpen}
              content={ZoomedView} 
              modalSize='tiny' 
              onClose={this.handleClose}
            />
          </TypeComponent>
        )
    }
}

OverlayType.defaultProps = {
  onSelect: null,
}