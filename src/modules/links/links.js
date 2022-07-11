import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LinksList from 'components/links';
import { copyToClipboard, formatDate } from 'utils/helper';
import { showToast } from 'utils/ui';
import { Link, Icon, Confirm } from 'blocks';

const deleteConfirmHeader = { icon: 'delete', content: 'Delete Link' };
const deleteConfirmMessage = 'Are you sure you want to delete this link?';

class Links extends React.Component {
    constructor() {
        super();
        this.handleShowLinkForm = this.handleShowLinkForm.bind(this);
        this.handleHideLinkForm = this.handleHideLinkForm.bind(this);
        this.handleUpdateLink = this.handleUpdateLink.bind(this);
        this.handleCreateLink = this.handleCreateLink.bind(this);
        this.handleEditLink = this.handleEditLink.bind(this);
        this.handleDeleteLink = this.handleDeleteLink.bind(this);
        this.handleDeleteConfirmed = this.handleDeleteConfirmed.bind(this);
        this.handleDeleteRejected = this.handleDeleteRejected.bind(this);

        this.cols = [{ 
            align: 'left', 
            label: 'Short URL', 
            labelField: 'shortUrl',
            renderer: this.renderShortUrl,
            className: 'wp-20 flex-fit'
        }, { 
            align: 'left', label: '', icon: 'copy', valueField: 'id', className: 'wp-10 flex-fit',
            onClick: this.handleCopy, title: 'Copy', color: 'blue'
        }, { 
            align: 'left', label: 'Overlay', valueField: 'id', labelField: 'overlayName', 
            className: 'wp-15 flex-fit', defaultValue: 'N.A.'
        }, { 
            align: 'left', 
            label: 'Target URL', 
            valueField: 'id', 
            labelField: 'targetUrl', 
            renderer: this.renderTargetUrl,
            className: 'wp-35 flex-fit'
        }, { 
            align: 'right', label: 'Created On', valueField: 'id', labelField: 'createdOn',
            className: 'wp-10 flex-fit', formatter: formatDate, 
        }, { 
            align: 'right', 
            label: 'Actions', 
            valueField: 'id',
            className: 'wp-10 flex-fit flexible-spacebetween',
            icons: [
                {
                    icon: 'edit', 
                    color: 'grey',
                    onClick: this.handleEditLink, 
                    title: 'Edit Link'
                },
                {
                    icon: 'delete', 
                    color: 'red',
                    onClick: this.handleDeleteLink, 
                    title: 'Delete Link',
                }
            ]
        }];
        this.state = {
            showLinkForm: false,
            linkDetails: null,
            showDeleteConfirmation: false
        };
    }

    handleEditLink(value, row) {
        this.setState({ showLinkForm: true, linkDetails: row });
    }
    
    handleDeleteLink(value, row) {
        this.setState({ showDeleteConfirmation: true, linkDetails: row });
    }

    handleDeleteConfirmed() {
        this.props.onDeleteLink(this.state.linkDetails.id);
        this.setState({ showDeleteConfirmation: false, linkDetails: null });
    }
    
    handleDeleteRejected() {
        this.setState({ showDeleteConfirmation: false, linkDetails: null });
    }

    handleHideLinkForm() {
        this.setState({ showLinkForm: false, linkDetails: null });
        this.props.onClearCreatedLink();
    }

    handleShowLinkForm() {
        this.setState({ showLinkForm: true });
    }

    handleUpdateLink(linkDetails) {
        this.props.onUpdateLink(linkDetails);
    }

    handleCreateLink(linkDetails) {
        this.props.onCreateLink(linkDetails);
    }

    componentDidMount() {
        this.props.onFetchLinks();
    }

    handleCopy(col, rowData) {
        copyToClipboard(rowData.shortUrl);
        showToast(`Link copied to clipboard`, 'success');
    }

    renderShortUrl = (col, rowData) => {
        return (
            <div className='flexible'>
                <div className='cell'>
                    <Link url={rowData.shortUrl} maxLength={32} />
                </div>
            </div>
        );
    }

    renderTargetUrl = (col, rowData) => {
        return (
            <div className='text'>
                <Link url={col.label} maxLength={40} />
            </div>
        );
    }

    render() {
        const { linksList, createdLink, overlays } = this.props;
        const { showLinkForm, linkDetails, showDeleteConfirmation } = this.state;
        return (
            <>
                <Confirm 
                    onConfirm={this.handleDeleteConfirmed}
                    onCancel={this.handleDeleteRejected}
                    header={deleteConfirmHeader}
                    isVisible={showDeleteConfirmation} 
                    body={deleteConfirmMessage}
                />
                <LinksList 
                    cols={this.cols} 
                    data={linksList} 
                    onCreate={this.handleCreate} 
                    createdLinkDetails={createdLink}
                    onUpdate={this.handleUpdateLink}
                    onCreate={this.handleCreateLink}
                    showLinkForm={showLinkForm}
                    linkDetails={linkDetails}
                    onHideForm={this.handleHideLinkForm}
                    onShowForm={this.handleShowLinkForm}
                    overlays={overlays}
                /> 
            </>
        );
    }
}

Links.propTypes = {
    createdLink: PropTypes.object.isRequired,
    overlays: PropTypes.array.isRequired,
    linksList: PropTypes.array.isRequired,
    onFetchLinks: PropTypes.func.isRequired,
    onUpdateLink: PropTypes.func.isRequired,
    onCreateLink: PropTypes.func.isRequired,
    onDeleteLink: PropTypes.func.isRequired,
};

export default Links;