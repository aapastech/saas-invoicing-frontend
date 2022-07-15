import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CustomizeOverlayComponent from 'components/customizeoverlay';
import { redirectTo } from 'modules';
import { showToast } from 'utils/ui';

class CustomizeOverlay extends React.Component {
    componentDidMount() {
        const { overlayListPath, selected = {}, onGetOverlay, match: { params } } = this.props;
        if(!selected.id) {
            if (params.overlayId) {
                return onGetOverlay(params.overlayId);
            } else {
                showToast(`Please select an overlay to customize`, 'error');
                redirectTo(overlayListPath);
            }
        }
    }

    componentWillUnmount() {
        this.props.onClearSelectedOverlay();
    }

    render() {
        const { selected = {}, onSave, } = this.props;
        if (!selected.id) {
            return null;
        }
        return(
            <CustomizeOverlayComponent selected={selected} onSave={onSave} />
        );
    }
}

CustomizeOverlay.propTypes = {
    selected: PropTypes.shape({
        type: PropTypes.string,
        category: PropTypes.string,
        template: PropTypes.string,
        name: PropTypes.string,
    }).isRequired
};

CustomizeOverlay.defaultProps = {};

export default withRouter(CustomizeOverlay);
