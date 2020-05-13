import { connect } from 'react-redux';
import Image from './image';
import * as actions from './actions';
import * as selectors from './selectors';

export default connect(
    state => ({
        imageLink: selectors.getImageLink(state),
    }),
    (dispatch) => ({
        onUpload: file => dispatch(actions.onUpload(file)),
        onClearImageLink: () => dispatch(actions.onClearImageLink()),
    })
)(Image);