import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { redirectTo } from 'modules';
import { onLogout } from 'modules/router/actions';

class Logout extends React.PureComponent {
    constructor(props) {
        super();
        props.onLogout();
    }

    componentDidMount() {
        redirectTo(this.props.signinPath)
    }

    render () {
        return null;        
    }
}

Logout.propTypes = {
    onLogout: PropTypes.func.isRequired,
    signinPath: PropTypes.string.isRequired,
};

export default connect(
    null, 
    (dispatch) => ({
      onLogout: () => dispatch(onLogout()),
    })
)(Logout);
  