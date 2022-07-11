import { connect } from 'react-redux';
import CustomizeOverlay from './overlaycustomize';
import * as actions from '../actions';
import * as selectors from '../selectors';

export default connect(
    (state) => {
        const selected = selectors.getCustomizeOverlay(state);
        return {
            selected,
        };
    },
    (dispatch, ownProps) => ({
        onSave: (...params) => dispatch(actions.onSaveCustomizedOverlay(...params, ownProps.overlayListPath)),
        onGetOverlay: (...params) => dispatch(actions.onGetOverlay(...params)),
        onClearSelectedOverlay: () => dispatch(actions.onClearSelectedOverlay()),
    })
)(CustomizeOverlay);