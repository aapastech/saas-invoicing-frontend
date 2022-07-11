import { connect } from 'react-redux';
import CreateOverlay from './overlaycreate';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { isPaidMember } from 'modules/userprofile/selectors';

export default connect(
    state => {
        return {
            isUpgradedMember: isPaidMember(state),
            stepsStatus: selectors.getStepsStatus(state),
            selected: selectors.getSelectedOverlay(state)
        };
    },
    (dispatch, ownProps) => ({
        onBackToType: () => dispatch(actions.backToType()),
        onBackToCategory: () => dispatch(actions.backToCategory()),
        onBackToTemplate: () => dispatch(actions.backToTemplate()),
        onSelectType: (property) => dispatch(actions.selectOverlayType(property)),
        onSelectCategory: (property) => dispatch(actions.selectOverlayCategory(property)),
        onSelectTemplate: (property) => dispatch(actions.selectOverlayTemplate(property)),
        onSelectName: (property, redirectPath) => dispatch(actions.selectOverlayName(property, redirectPath)),
        onSelection: (property, value) => dispatch(actions.selectedPropertyValue(property, value)) 
    })
)(CreateOverlay);