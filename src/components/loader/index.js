import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import client from 'utils/client';

export default class Loader extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
    }

    showLoader() {
        this.setState({ isVisible: true });
    }

    hideLoader() {
        this.setState({ isVisible: false });
    }
 
    componentDidMount() {
        this.unsubscriber = client.subscribe({
            onStart: this.showLoader,
            onComplete: this.hideLoader,
            onError: this.hideLoader,
        });
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    render() {
        const { isVisible } = this.state;
        if (!isVisible) return null;
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }
}
Loader.propTypes = {

};
Loader.defaultProps = {

};