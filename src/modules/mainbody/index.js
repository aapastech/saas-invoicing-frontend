import { connect } from 'react-redux'
import Mainbody from './mainbody';
import { hasPayouts, hasOverlays } from 'models/selector-features';

export default connect(
    (state) => ({
        OVERLAY_ENABLED: hasOverlays(state),
        PAYOUTS_ENABLED: hasPayouts(state),
    })
)(Mainbody);
  