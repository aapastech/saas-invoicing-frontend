import { connect } from 'react-redux';
import Overlays from './overlays';
import * as actions from './actions';
import * as selectors from './selectors';

export default connect(
    state => ({
        data: selectors.getOverlaysList(state),
    }),
    (dispatch) => ({
      onFetchOverlays: () => dispatch(actions.onFetchOverlays()),
      onDuplicateOverlay: (overlay, redirectPath) => dispatch(actions.onDuplicateOverlay(overlay, redirectPath)),
      onDeleteOverlay: (overlayId) => dispatch(actions.onDeleteOverlay(overlayId)),
    })
)(Overlays);