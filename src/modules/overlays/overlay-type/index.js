import React from 'react';
import PropTypes from 'prop-types';
import OverlayPage from 'components/createoverlays/overlay-page';
import { withRouter } from 'react-router-dom';

class OverlayType extends React.Component {
    render() {
        const { match: { params } } = this.props
        return (
            <OverlayPage {...params} />
        );
    }
}
OverlayType.propTypes = {

};
OverlayType.defaultProps = {

};

export default withRouter(OverlayType);