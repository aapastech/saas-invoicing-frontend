import React from 'react';
import _ from 'lodash';
import CreateOverlays from 'components/createoverlays';
import { redirectTo } from 'modules';

const stepsConfig = [{
    key: 'overlayType',
    icon: 'object ungroup outline',
    title: 'Overlay Type',
    description: 'Positioning and size',
},
{
    key: 'overlayCategory',
    icon: 'dot circle',
    title: 'Overlay Category',
    description: 'Action on overlay',
},
{ 
    key: 'overlayTemplate', 
    icon: 'wrench',
    title: 'Template',
    description: 'Elements and their positions on overlay' 
},
{ 
    key: 'overlayName', 
    icon: 'tag',
    title: 'Name',
    description: 'So that system can identify' 
}];

export default class CreateOverlay extends React.Component {
    constructor() {
        super();
        this.handleBack = this.handleBack.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.getActiveStep = this.getActiveStep.bind(this);
        this.state = {
            steps: [...stepsConfig],
        };
    }

    getSteps() {
        const { stepsStatus } = this.props;
        const { steps } = this.state;
        return steps.map(s => {
            const newStep = _.assign({...s}, stepsStatus[s.key]);
            return newStep;
        });
    }

    getActiveStep(steps) {
        if(!steps) steps = this.getSteps();
        const activeStep = _.find(steps, 'active');
        return activeStep.key;
    }

    handleBack() {
        const activeStep = this.getActiveStep();
        const { overlaysListPath } = this.props;
        if (activeStep === 'overlayName') {
            return this.props.onBackToTemplate();
        }
        else if (activeStep === 'overlayTemplate') {
            return this.props.onBackToCategory();
        }
        else if (activeStep === 'overlayCategory') {
            return this.props.onBackToType();
        }
        else if (activeStep === 'overlayType') {
            return redirectTo(overlaysListPath);
        }
    }

    handleSelect(type) {
        const { customizeOverlayPath } = this.props;
        const activeStep = this.getActiveStep();
        switch(activeStep) {
            case 'overlayType':
                this.props.onSelectType(type);
            break;
            case 'overlayCategory':
                this.props.onSelectCategory(type);
            break;
            case 'overlayTemplate':
                this.props.onSelectTemplate(type);
            break;
            case 'overlayName':
                this.props.onSelectName(type, customizeOverlayPath);
            break;
            default:
                return;
        }
    }

    render() {
        const { selected, isUpgradedMember } = this.props;

        return (
            <div className='new-overlay'>
                <CreateOverlays 
                    steps={this.getSteps()} 
                    onSelect={this.handleSelect}
                    onBack={this.handleBack}
                    selected={selected}
                    isUpgradedMember={isUpgradedMember}
                />
            </div>
        );
    }
}