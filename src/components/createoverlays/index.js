import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Step, View, Form, FormField, Button } from 'blocks';

import { ShowOverlayType, ShowOverlayCategory, ShowOverlayTemplate, ShowOverlayName } from './classified-overlays';

const keyComponents = {
    overlayType: ShowOverlayType,
    overlayCategory: ShowOverlayCategory,
    overlayTemplate: ShowOverlayTemplate,
    overlayName: ShowOverlayName,
}

export default class CreateOverlays extends React.Component {
    render() {
        const { steps, onSelect, selected, onBack, isUpgradedMember } = this.props;
        const activeStep = _.find(steps, 'active');
        if (!activeStep) return null;
        const ShowComponent = keyComponents[activeStep.key];
        return (
            <>
                <Step steps={steps} />
                <View className='overlay-list'>
                    <ShowComponent 
                        isUpgradedMember={isUpgradedMember}
                        onSelect={onSelect} 
                        selected={selected}
                    />
                    <Form>
                        <FormField>
                            <Button onClick={onBack}>Back</Button>
                        </FormField>
                    </Form>
                </View>
            </>
        );
    }
}

CreateOverlays.propTypes = {
    stepsStatus: PropTypes.object,
    steps: PropTypes.array,
    onBack: PropTypes.func,
}