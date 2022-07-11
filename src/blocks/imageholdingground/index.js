import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'blocks';
import { Grid } from 'semantic-ui-react';

export default class ImageHolderGround extends React.Component {
    render() {
        const { caption, footer, image: { src, ...imageProps }, children } = this.props;
        return (
            <View className='image-holder'>
                <Grid columns={3}>
                    {caption && (
                        <Grid.Row className='no-bottom-padding' centered columns={1}>
                            <Grid.Column textAlign='center'>
                                {caption}
                            </Grid.Column>
                        </Grid.Row>
                    )}
                    <Grid.Row className='no-bottom-padding' centered columns={1}>
                        <Grid.Column textAlign='center'>
                            {children}
                            {src && (<Image {...imageProps} src={src} />)}
                            
                        </Grid.Column>
                    </Grid.Row>
                    {footer && (
                        <Grid.Row centered columns={1}>
                            <Grid.Column textAlign='center'>
                                {footer}
                            </Grid.Column>
                        </Grid.Row>
                    )}
                </Grid>
            </View>
        )
    }
}
ImageHolderGround.propTypes = {
    caption: PropTypes.string,
    footer: PropTypes.elementType, 
    image: PropTypes.elementType, 
};
ImageHolderGround.defaultProps = {
    caption: '',
    footer: null, 
    image: null, 
    children: null,
};