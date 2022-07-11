import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form, FormField, Button } from 'blocks';

export default class OverlayName extends React.Component {
    state = {
        overlayName: '',
    };
    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNameChange(e) {
        this.setState({ overlayName: e.target.value });
    }

    handleSave() {
        this.props.onSelect(this.state.overlayName);
    }

    render() {
        return(
              <Form>
                <FormField>
                  <label>Overlay Name</label>
                  <input onChange={this.handleNameChange} />
                </FormField>
                <FormField>
                    <Button onClick={this.handleSave} primary>Save</Button>
                </FormField>
              </Form>
        );
    }
}
OverlayName.propTypes = {

};
OverlayName.defaultProps = {

};