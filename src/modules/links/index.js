import { connect } from 'react-redux';
import Links from './links';
import * as actions from './actions';
import * as selectors from './selectors';
import { getOverlaysList } from 'modules/overlays/selectors';
import * as queries from './queries';

export default connect(
    state => ({
        linksList: selectors.getLinksList(state),
        createdLink: selectors.getNewCreatedLink(state),
        overlays: queries.overlaysForLinks(getOverlaysList(state)),
    }),
    (dispatch) => ({
        onFetchLinks: e => dispatch(actions.onFetchLinks()),
        onClearCreatedLink: () => dispatch(actions.onClearCreatedLink()),
        onCreateLink: link => dispatch(actions.onCreateLink(link)),
        onUpdateLink: link => dispatch(actions.onUpdateLink(link)),
        onDeleteLink: linkId => dispatch(actions.onDeleteLink(linkId)),
    })
)(Links);