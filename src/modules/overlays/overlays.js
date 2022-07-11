import React from 'react';
import PropTypes from 'prop-types';
import { OverlaysList } from 'components/overlayslist';
import { redirectTo } from 'modules';
import { Confirm } from 'blocks';
import API_CONFIG from 'constants/apiconfig';
import { formatDate } from 'utils/helper';

const duplicateConfirmHeader = { icon: 'copy', content: 'Create a duplicate Overlay' };
const duplicateConfirmMessage = `This will create a duplicate Overlay. Do you wish to continue?`;
const deleteConfirmHeader = { icon: 'delete', content: 'Delete Overlay' };
const deleteConfirmMessage = 'Are you sure you want to delete this overlay?';

export default class Overlays extends React.Component {
    constructor() {
        super();
        this.state = {
            showDuplicateConfirmation: false,
            overlay: null,
            showDeleteConfirmation: false,
        };

        this.handleDuplicate = this.handleDuplicate.bind(this);
        this.handleDuplicateConfirmed = this.handleDuplicateConfirmed.bind(this);
        this.handleDuplicateRejected = this.handleDuplicateRejected.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteConfirmed = this.handleDeleteConfirmed.bind(this);
        this.handleDeleteRejected = this.handleDeleteRejected.bind(this);

        this.cols = [{ 
            align: 'left', label: 'Title', valueField: 'id', labelField: 'name', className: 'wp-35 flex-fit'  
        }, { 
            align: 'center', label: 'Created on', valueField: 'id', labelField: 'createdOn', className: 'wp-25 flex-fit',
            formatter: formatDate, 
        }, { 
            align: 'right', label: 'Preview', icon: 'eye', valueField: 'id', className: 'wp-10 flex-fit',
            onClick: this.handlePreview, title: 'Show Preview',
        }, { 
            align: 'right', label: 'Edit', icon: 'edit', valueField: 'id', color: 'grey', className: 'wp-10 flex-fit',
            onClick: this.handleEdit, title: 'Edit Overlay'
        }, { 
            align: 'right', label: 'Duplicate', icon: 'copy', valueField: 'id', color: 'blue', className: 'wp-10 flex-fit',
            onClick: this.handleDuplicate, title: 'Create a duplicate Overlay',
        }, { 
            align: 'right', label: 'Delete', icon: 'delete', valueField: 'id', color: 'red', className: 'wp-10 flex-fit',
            onClick: this.handleDelete, title: 'Delete Overlay',
        }];
    }
    
    handlePreview = (value, row) => {
        window.open(`${API_CONFIG.OVERLAY_PREVIEW.url}${value}`);
    }
    
    handleEdit = (value, row) => {
        redirectTo(`${this.props.editOverlayPath}${value}`);
    }
    
    handleDuplicate = (value, row) => {
        this.setState({ showDuplicateConfirmation: true, overlay: row });
    }

    handleDuplicateConfirmed() {
        this.props.onDuplicateOverlay(this.state.overlay, this.props.editOverlayPath);
        this.setState({ showDuplicateConfirmation: false, overlay: null });
    }

    handleDuplicateRejected() {
        this.setState({ showDuplicateConfirmation: false, overlay: null });
    }
    
    handleDelete(value, row) {
        this.setState({ showDeleteConfirmation: true, overlay: row });
    }

    handleDeleteConfirmed() {
        this.props.onDeleteOverlay(this.state.overlay.id);
        this.setState({ showDeleteConfirmation: false, overlay: null });
    }
    
    handleDeleteRejected() {
        this.setState({ showDeleteConfirmation: false, overlay: null });
    }

    handleOnAddOverlays = () => {
        redirectTo(this.props.newOverlayPath)
    };

    componentDidMount() {
        this.props.onFetchOverlays();
    }

    render() {
        const { data } = this.props;
        const { showDuplicateConfirmation, showDeleteConfirmation } = this.state;
        return (
            <>
                <Confirm 
                    onConfirm={this.handleDuplicateConfirmed}
                    onCancel={this.handleDuplicateRejected}
                    header={duplicateConfirmHeader}
                    isVisible={showDuplicateConfirmation} 
                    body={duplicateConfirmMessage}
                />
                <Confirm 
                    onConfirm={this.handleDeleteConfirmed}
                    onCancel={this.handleDeleteRejected}
                    header={deleteConfirmHeader}
                    isVisible={showDeleteConfirmation} 
                    body={deleteConfirmMessage}
                />
               <OverlaysList cols={this.cols} data={data} onAddOverlay={this.handleOnAddOverlays} /> 
            </>
        );
    }
}
Overlays.propTypes = {
    newOverlayPath: PropTypes.string.isRequired,
    editOverlayPath: PropTypes.string.isRequired,
}