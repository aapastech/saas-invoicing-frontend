import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Table } from 'blocks';
import { connect } from 'react-redux';
import * as selectors from './selectors';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';
import { Icon, Link } from 'blocks';

class Top5Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Top 5 Links', 
            labelField: 'shortUrl', 
            renderer: this.renderLink,
        }, { 
            align: 'center', label: 'Visits', labelField: 'visits', 
            className: 'wp-10 flex-fit'
        }];
    }
    
    onCopy(col, rowData) {
        copyToClipboard(rowData.shortUrl);
        showToast(`Link copied to clipboard`, 'success');
    }

    renderLink = (col, rowData) => {
        return (
            <div className='flexible'>
                <div className='cell'>
                    <Link url={rowData.shortUrl} maxLength={32} />
                </div>
                <div className='cell flexible-centered'>
                    <Icon 
                        title='Copy'
                        onClick={() => this.onCopy(col, rowData)} 
                        className='pointer' 
                        name='copy' 
                        color='blue' 
                    />
                </div>
            </div>
        );
    }

    render() {
        const { links } = this.props;
        return(
            <Table 
                className="full-height"
                compact='very'
                cols={this.cols} 
                data={links} 
                noRecordsLabel="No Links found" 
            />
        );
    }
}
Top5Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        shortUrl: PropTypes.string.isRequired,
        id: PropTypes.string,
        visits: PropTypes.number,
    })),
};
Top5Links.defaultProps = {
    links: [],
};

export default connect(
    state => ({
        links: selectors.getTop5Links(state),
    }),
)(Top5Links);