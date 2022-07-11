import React from 'react';
import PropTypes from 'prop-types';

import { Table, View, Confirm as Popup } from 'blocks';
import { CreateLinkTrigger, LinkForm, CreatedLinkForm } from './createLink';
import 'styles/links.scss';

const createLinkHeader = { icon: 'linkify', content: 'Create Link' };
const createdLinkHeader = { icon: 'linkify', content: 'Short Link' };
const editLinkHeader = { icon: 'unlinkify', content: 'Edit Link' };

class LinksList extends React.Component {
    constructor(){
        super()
        this.state = {
            linkDetails: null,
            isEdit: false,
        };
        this.handleLinkFormState = this.handleLinkFormState.bind(this);
        this.handleConfirmLink = this.handleConfirmLink.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.linkDetails) {
            return {
                linkDetails: state.linkDetails || props.linkDetails,
                isEdit: Boolean(props.linkDetails.id)
            }
        }
        return {
            ...state,
            isEdit: false,
        };
    }

    handleConfirmLink() {
        const { isEdit, linkDetails } = this.state;
        if (isEdit) {
            this.props.onUpdate(linkDetails)
            return;
        }
        this.props.onCreate(linkDetails)
    }

    handleLinkFormState(linkDetails) {
        this.setState({ linkDetails });
    }

    getLinkForm() {
        const { linkDetails, overlays } = this.props;
        return (
            <LinkForm 
                onChange={this.handleLinkFormState} 
                linkDetails={linkDetails} 
                overlays={overlays}
            />
        );
    }

    getCreatedLink() {
        const { createdLinkDetails: { shortUrl } } = this.props;
        return <CreatedLinkForm shortUrl={shortUrl} />
    }

    getFooterActions() {
        return (
            <CreateLinkTrigger onClick={this.props.onShowForm} />
        )
    }

    render() {
        const { 
            cols, data, showLinkForm, onHideForm, createdLinkDetails, linkDetails 
        } = this.props;
        const body = createdLinkDetails ? this.getCreatedLink() : this.getLinkForm();
        let header = linkDetails ? editLinkHeader : createLinkHeader;
        let showConfirm = true;
        let cancelBtnText = 'Cancel';
        let size;
        if (createdLinkDetails) {
            showConfirm = false;
            header = createdLinkHeader;
            cancelBtnText = 'Close';
            size = 'mini';
        }
        return (
            <>
                {showLinkForm && (
                    <Popup 
                        size={size}
                        showConfirm={showConfirm}
                        onConfirm={this.handleConfirmLink}
                        onCancel={onHideForm}
                        isVisible={showLinkForm}
                        header={header}
                        body={body}
                        confirmBtnText='Save'
                        cancelBtnText={cancelBtnText}
                        confirmBtnColor='primary'
                    />
                )}
                <View className='links'>
                    <Table
                        className="full-height flex-y cell"
                        cols={cols}
                        data={data}
                        footerActions={this.getFooterActions()}
                        noRecordsLabel="No Links found"
                    />
                </View>
            </>
        );
    }
}

export default LinksList;

LinksList.propTypes = {
    cols: PropTypes.array,
    data: PropTypes.array,
    showLinkForm: PropTypes.bool.isRequired,
    createdLinkDetails: PropTypes.object,
    linkDetails: PropTypes.object,
    onUpdate: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onHideForm: PropTypes.func.isRequired,
    onShowForm: PropTypes.func.isRequired,
    overlays: PropTypes.array.isRequired,
};

LinksList.defaultProps = {
    cols: [],
    data: [],
    createdLinkDetails: null,
    overlays: [],
};